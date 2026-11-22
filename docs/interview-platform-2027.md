# Platform / SRE interview defense — Q1/2027

Use this with the [Platform CV](../output/pdf/mai-nguyen-binh-tan-platform-sre-cv.pdf) and the [evidence ledger](apply-2027-evidence.md). Explain your own contribution precisely; the repository history is the source for attribution.

## Five-minute project explanation

**0:00–0:45 — Goal.** AKS-SRE-Platform models a GitOps deployment with image, manifest and policy checks. The current recovery drill ran on local single-node kind, not a live AKS cluster.

**0:45–1:45 — Deployment path.** Show the main CI, GitOps validation and SBOM runs linked in the ledger. Explain how health/readiness probes keep an application endpoint out of service until it is ready. The current drill used the repo's Node workload; an older FlashSale kind integration is a separate run.

**1:45–3:15 — Controlled failure.** The [timestamped drill](https://github.com/imtarget05/AKS-SRE-Platform/blob/4eaa0ec94cffc4c327145cd98d8031c4bfb8bc23/docs/evidence/local-kind-rollback-2026-11-19/README.md) started two ready replicas, confirmed HTTP 200, rolled out an invalid image, observed `ErrImagePull`, and saw the old replicas continue serving. `kubectl rollout undo` restored the exact prior image. The measured 0.143 seconds covers the rollback **command**, not outage recovery or SLO compliance.

**3:15–4:10 — Why it works.** Kubernetes does not replace ready old pods when the new ReplicaSet cannot pull its image under the chosen rollout settings. Show the deployment state and runbook; explain how alerts and manual rollback would be triggered in a real incident.

**4:10–5:00 — Limits.** A single-node kind drill does not prove node failure recovery, multi-zone availability, live Azure permissions, continuous traffic or sustained SLOs. To claim those, run a measured load stream through a real environment and record detection and recovery timestamps. Azure spend is unnecessary for the current portfolio claim.

## Questions to practice aloud

| Question | Evidence-backed answer |
| --- | --- |
| Did the service have an outage? | The sampled endpoint returned HTTP 200 and two old replicas remained ready. There was no continuous traffic measurement, so do not claim zero downtime. |
| What does 0.143 seconds mean? | It is the measured `rollout undo` command duration. It excludes alerting, human decision, rollout completion and user-visible recovery. |
| Why did rollback help after `ErrImagePull`? | The bad revision never became ready; undo restored the previous image declaration. The healthy old ReplicaSet remained available during this specific drill. |
| Why not cite live AKS? | There is no current live cluster evidence for the cited commit. Terraform/manifests and local kind prove different things. |
| What is adaptiveops' status? | Its SonarCloud PR analysis passed, but a separate SonarQube Server job lacks host/token and PR #1 remains open. It is excluded from this CV. |

Practice this explanation aloud against the log and runbook. A human rehearsal and follow-up questions remain to be completed.
