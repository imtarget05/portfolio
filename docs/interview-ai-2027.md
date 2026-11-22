# AI Engineer interview defense — Q1/2027

Use this with the [AI CV](../output/pdf/mai-nguyen-binh-tan-ai-engineer-cv.pdf) and the [evidence ledger](apply-2027-evidence.md). Attribute implementation honestly from commits; describe model behavior only where a run recorded it.

## Five-minute project explanation

**0:00–0:50 — Problem.** SmartDoc asks questions over documents and should cite evidence or abstain. It combines ingestion, retrieval, corrective checks and a local-first LLM route. The hosted Azure and Render endpoints were unavailable in the latest audit, so the present benchmark is local.

**0:50–2:00 — Path through the system.** Show where a document is ingested, indexed and retrieved; where the corrective/evidence checks run; and how the router chooses local Ollama. Explain which steps use deterministic tests and which call a model. Avoid calling a fixture score real retrieval accuracy.

**2:00–3:20 — Measured run.** The 15-question local Ollama run on commit `27d911c` (port 18080) recorded 12/12 (100%) lexical source-keyword hits, 11/12 (91.7%) answer substring hits, 2/3 explicit abstentions, 15/15 LLM answers (0 extractive fallbacks), and 31,758 ms avg CPU latency. The router used `qwen2.5:1.5b`; log route completions showed `local_ollama`. The smoke test on port 18080 verified `DOC UPLOAD`, `OWNER ISOLATION` (403), and live LLM response returning "Paris, France" (13.3s, `answerOrigin=llm`). The JSON alone does not prove token use or compute cost. One answer failed a literal-word rubric while expressing the intended idea, so these counts are lexical hits, not semantic accuracy.

**3:20–4:10 — Failure handling.** Explain the circuit-breaker fault-injection test and the policy that confidential documents cannot fall back to a public provider. Show the test rather than claiming a live outage was handled. For IncidentIQ, PR #16's 30 synthetic cases used local keyword retrieval plus live Workers AI; that benchmark does not validate hosted hybrid retrieval.

**4:10–5:00 — Limits.** SmartDoc's local benchmark corpus is small and synthetic. Live public API/agent, production latency and cloud cost are unverified. CreditFlow's 14 local scoring cases and a separate REVIEW → approval → replay → ledger drill prove the synthetic API flow, not suitability for lending; the `past-defaults` scoring fixture received APPROVE. The graph run verified one disbursement row and audit record, with no real money movement. IncidentIQ PRs still require review before main can be cited.

## Questions to practice aloud

| Question | Evidence-backed answer |
| --- | --- |
| Is 96.8% your live retrieval accuracy? | No. It is a mock fixture regression signal. The separate 15-question local run has the real-stack measurements above. |
| What does 11/12 measure? | Literal answer substring hits on that dataset. It is not a semantic judge or general answer accuracy. |
| What happens when evidence is missing? | The local run recorded 3/3 explicit abstentions for its unsupported questions; show those cases and the code path. |
| Did the LLM make a lending decision in CreditFlow? | No. The synthetic model/policy path returns the score and decision; LLM text is explanatory. This portfolio model has not been validated for real lending. |
| Is IncidentIQ hybrid retrieval ready? | No. The recorded local run is keyword only, and the hosted hybrid preview had weak fresh-document recall. PR #16 is still awaiting review. |
| Why no Azure demo? | The hostnames did not resolve and the last Azure deploy failed login. Local tests support the current claim; no live cloud result is asserted. |

Practice with the raw result JSON and identify one answer-rubric miss, one abstention and one limitation without looking at the script. A human rehearsal remains to be completed.
