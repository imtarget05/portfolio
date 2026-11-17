# Backend Java interview defense — Q1/2027

Use this with the [Backend CV](../output/pdf/mai-nguyen-binh-tan-backend-java-cv.pdf). The cited commits and current CI runs are in [the evidence ledger](apply-2027-evidence.md). Speak only about work you can explain from code and tests; replace “I built” with the exact contribution you personally made when the implementation history differs.

## Five-minute project explanation

**0:00–0:45 — Problem.** Flash-sale payments receive retries and concurrent requests while PostgreSQL, RabbitMQ, Redis and an external provider have different failure modes. The demo uses a simulated provider, so it measures software behavior rather than real settlement.

**0:45–2:00 — Boundary.** FlashSale persists a payment and outbox intent in PostgreSQL in one transaction. A unique idempotency key chooses the winner under a race. Same payload replays; a changed payload is HTTP 409. The relay sends committed events with publisher confirms, and consumers must still deduplicate. Point to the [payment walkthrough](https://github.com/imtarget05/FlashSale-Backend/blob/main/docs/apply-2027-payment-demo.md).

**2:00–3:15 — Failure proof.** Two concurrent identical HTTP requests leave one payment and one outbox row. A RabbitMQ outage leaves the outbox pending with an error, and a later relay attempt publishes after recovery. The audit projection in MongoDB is eventually consistent and is checked separately. The main Java CI runs those integration tests with service containers.

**3:15–4:15 — Banking comparison.** In retail-finance-core-platform, Java/MySQL owns account balances and ledger rows. Optimistic locking protects concurrent debits; an injected audit write failure rolls back balance and ledger. Python reconciliation reads the settled feed and reports mismatches without modifying money. Point to the [ledger walkthrough](https://github.com/imtarget05/retail-finance-core-platform/blob/main/docs/apply-2027-backend-demo.md).

**4:15–5:00 — Limits and next work.** No live bank integration or verified AKS deployment. The FlashSale provider is simulated and its rate limiter is process-local. Retail reconciliation is tested but has no scheduler or broker worker. A production claim needs deployment, recovery, access control and operational measurements beyond these CI tests.

## Questions to practice aloud

| Question | Answer to defend with evidence |
| --- | --- |
| Why is a unique key needed if the API checks first? | Two requests can pass an application-level check together. The database constraint makes duplicate persistence impossible; the concurrent integration tests show one payment/ledger row. |
| Does an outbox guarantee exactly-once delivery? | It guarantees the intent commits with the payment. Publishing may retry after a crash, so consumers need idempotent handling; the broker outage test proves pending then recovery, not global exactly-once. |
| What happens if Redis fails? | FlashSale's lookup path falls back to PostgreSQL. Its process-local rate limiter is a separate scaling limit. |
| Why does an audit failure roll back a money movement in retail-finance? | The test injects persistence failure and asserts unchanged balance, ledger and audit row counts. Explain the transaction boundary and the operational tradeoff of coupling availability to audit persistence. |
| Can reconciliation repair a mismatch? | No. It emits a discrepancy for human review. Automatic correction would hide a loss or partner error. |
| What can the CI numbers prove? | They prove these cases passed on a named commit and container-backed database; they do not prove production reliability, throughput or bank settlement. |

Record a practice answer and check that the listener can follow the boundary, one failure trace, one tradeoff and one limitation without reading the README. No practice recording or hiring feedback has been collected yet.
