# Pending — Tasks from CTM SEO+AEO Domination Prompt v2.0

These are the items from the audit framework that **cannot be executed from inside this code-editing environment**. They require third-party platform access, external tools, paid services, real-time AI engine queries, client-supplied first-party data, or human action.

Each item lists:
- **Why blocked:** the specific reason it can't be done from here
- **Unblock:** what would change the answer to "yes"
- **Owner:** suggested next-step owner (Client / Marketing Ops / Outside Vendor / SEO Tool Account)

---

## 1. Real-time data acquisition (paid SEO/AI-visibility tools)

| Task | Why blocked | Unblock | Owner |
|---|---|---|---|
| Pull live Core Web Vitals CrUX data | No PageSpeed Insights / CrUX API key configured | Run PSI on every key URL and paste results, OR provide CrUX API key | Marketing Ops |
| Keyword rank tracking | No Ahrefs / SEMrush / SE Ranking API access | Provide tool account + API, OR paste rank reports | SEO Tool Account |
| Backlink profile + competitor backlink gap | No Ahrefs / Majestic / Moz access | Provide tool account, OR export competitor link profiles | SEO Tool Account |
| Search volume + KD per keyword | Keyword tools not connected | Provide Ahrefs/SEMrush export per keyword cluster | SEO Tool Account |
| Brand mention volume across the web | No brand monitoring tool (Mention, Brand24, Talkwalker) | Set up brand monitoring; paste monthly export | Marketing Ops |
| AI visibility tool data (Profound, SE Ranking AI Overviews, Semrush AI Visibility, Frase AI Search Tracking) | No accounts configured | Subscribe to one of these platforms + paste exports | SEO Tool Account |

---

## 2. AI engine direct querying (Phase 3.1, 4.3, 9, 10.1)

| Task | Why blocked | Unblock | Owner |
|---|---|---|---|
| Prompt ChatGPT with target queries and record citations | I am running as Claude in Claude Code; I cannot query other AI engines from inside this session | Manually prompt each engine, paste results into a shared doc, OR use an AI-visibility platform that does this automatically | Marketing Ops |
| Same for Claude (web), Perplexity, Google AI Overviews, Gemini, Microsoft Copilot | Same | Same | Marketing Ops |
| AI Citation Audit per competitor across 5–10 queries (Phase 4.3) | Same | Same | Marketing Ops |
| Brand description audit ("What is Piedmont Dental By Design?") across each AI engine | Same | Same | Marketing Ops |
| Monthly prompt-level visibility tracking (the 20-50 strategic prompts) | Same | Use an AI-visibility platform that supports prompt-level monitoring | SEO Tool Account |

---

## 3. Off-platform property management

| Task | Why blocked | Unblock | Owner |
|---|---|---|---|
| Google Business Profile management (categories, photos, posts, Q&A, review responses) | Not a website file; lives in Google's GBP console | Client logs into GBP, OR grants manager access to whoever will run it | Client |
| Bing Places for Business | Not a website file; powers Microsoft Copilot | Client claims/updates Bing Places listing | Client |
| Apple Maps Business Connect | Not a website file; powers Apple Intelligence | Client claims listing in Apple Business Connect | Client |
| Yelp / BBB / Foursquare / Nextdoor business profiles | Each is its own platform | Client claims + updates each profile | Client |
| LinkedIn company page (Phase 7.2) | Lives in LinkedIn | Client / marketing team updates company page | Client |
| LinkedIn executive profiles (Drs. Martenson, Cangini, Ma) | Lives in LinkedIn under each doctor's personal account | Each doctor updates their own profile (or grants page admin) | Client (Doctors) |
| Reddit brand monitoring + ethical participation | Lives on Reddit | Marketing assigns someone to monitor relevant subreddits and engage authentically | Marketing Ops |
| Industry forum / community presence | Off-platform | Marketing identifies and engages with relevant communities | Marketing Ops |
| Association directory listings (ADA, AACD, CDA — these are already linked from site but the directory entries themselves) | Lives on each association's site | Client confirms listings are accurate; updates each directly | Client |
| Press / trade publication relationships | Off-platform PR work | Hire / assign PR resource | Outside Vendor |
| Third-party review platforms (G2, Capterra, Clutch, Trustpilot) — generally B2B, may not apply to a dental practice | Each is its own platform | Decide which apply; claim + populate where they do | Client |

---

## 4. Off-platform link building & outreach (Phase 7)

| Task | Why blocked | Unblock | Owner |
|---|---|---|---|
| Editorial / resource link acquisition | Outreach campaigns lives in email/CRM, not code | Run via SEO agency or in-house team using the outreach playbook I can produce | Outside Vendor |
| Guest posting placements | Same | Same | Outside Vendor |
| Manual directory submissions | Same | Same | Marketing Ops |
| Digital PR / media outreach | Same | Same | Outside Vendor |
| Partnership / sponsorship deals | Same | Client-driven business development | Client |
| Broken link building outreach | Same | Same | Outside Vendor |
| Unlinked brand mention reclamation | Same | Use a tool like Ahrefs Content Explorer to find mentions, then outreach | SEO Tool Account |
| Wikipedia entry creation | Requires notable third-party coverage + independent editor activity; cannot be self-edited | Earn enough press coverage that an outside editor creates the entry, OR engage a Wikipedia consultant | Outside Vendor |
| Wikidata entry creation | Less gated than Wikipedia, but still off-platform | Marketing creates the entity entry directly on Wikidata | Marketing Ops |

---

## 5. Analytics / measurement (Phase 10 ongoing tracking)

> Note: I can WRITE the code to instrument tracking; I cannot READ the live data the tracking produces.

| Task | Why blocked | Unblock | Owner |
|---|---|---|---|
| Pages indexed monitoring (Google Search Console) | GSC requires login; I have no access | Add user to GSC, paste monthly reports | Marketing Ops |
| Keyword position movement tracking | Needs rank tracker account | See Section 1 | SEO Tool Account |
| Core Web Vitals real-world monitoring (PSI / CrUX) | Same | See Section 1 | SEO Tool Account |
| Organic traffic / CTR / conversion rate by URL | Lives in GA4 + GSC | Add user to GA4 + GSC, paste exports | Marketing Ops |
| Revenue / leads attribution to organic | Lives in GA4 + CRM (HubSpot/GHL) | Connect CRM, paste exports | Marketing Ops |
| Domain Rating / Authority trend | Ahrefs/Moz/SEMrush | See Section 1 | SEO Tool Account |
| AI-referred traffic measurement (ChatGPT/Perplexity/Claude/AI Overviews referrers in GA4) | I can ADD the tracking code; reading the data needs GA4 access | Add me/user to GA4, then I can audit the data | Marketing Ops |
| AI-referred conversion rate (3-4x organic claim validation) | Needs GA4 + CRM data | Same as above | Marketing Ops |
| AI citation share-of-voice tracking | Needs an AI-visibility platform | See Section 1 | SEO Tool Account |
| Monthly Looker Studio reporting dashboard | Lives in Looker Studio, wired to GA4/GSC/Ahrefs | Set up Looker Studio with data source connectors | Marketing Ops |

---

## 6. Client-supplied first-party content & data (Phase 2.1, 3.4, 6.1)

> The audit framework calls for content that demonstrates **first-hand experience, original data, and expert commentary**. I can structure / format / write the surrounding content, but the source material has to come from the practice.

| Task | Why blocked | Unblock | Owner |
|---|---|---|---|
| Real customer demographics, psychographics, trigger events | Requires actual customer interviews / surveys | Practice conducts 5-10 patient interviews; share recordings or transcripts | Client |
| Actual customer LTV / value | Internal financial data | Client shares aggregate LTV figures | Client |
| Real objection mapping (what makes patients hesitate?) | Internal CRM / sales-call data | Client shares common objections from front-desk / consult notes | Client |
| Original research / proprietary data (Phase 3.4, 7.3) | Doesn't exist yet | Practice conducts a survey, publishes internal stats, or commissions original research | Client |
| Expert commentary / quotable takes (Phase 3.4) | Needs the doctors to actually be quoted | Schedule 30-min interviews with each doctor; turn their commentary into citable quotes | Client (Doctors) |
| First-hand case studies with real numbers (Phase 3.4) | Requires real cases the practice has handled | Practice shares anonymized case data (with consent) | Client |
| Patient-consented before/after photography for new pages | Requires patient consent + photo archive access | Client provides additional consented case photography | Client |
| Internal statistics (volume of cases per procedure, success rates) | Internal data | Client shares aggregate practice metrics | Client |

---

## 7. A/B testing platforms (Phase 8)

| Task | Why blocked | Unblock | Owner |
|---|---|---|---|
| Running live A/B tests on landing pages | Needs Optimizely / VWO / Convert / Google Optimize replacement (Optimize was deprecated 2023) | Subscribe to a CRO platform + install on site; I can then write the experiment configs | Marketing Ops |
| Statistical significance testing | Same | Same | Marketing Ops |
| Heatmap / scroll-map analysis | Needs Hotjar / Microsoft Clarity / Lucky Orange | Install Clarity (free) — then I can audit; the data itself lives in their dashboard | Marketing Ops |

---

## 8. Strategic deliverables that need data from above sections

These I can PARTIALLY produce, but the audit framework expects them to be data-backed. Listed here so the gap is clear.

| Deliverable | Partial / Blocked because |
|---|---|
| **#4 AI Visibility Baseline table** (Phase 3.1) | Cannot query other AI engines directly. Would need someone to manually prompt each engine and paste results, OR an AI-visibility platform. |
| **#5 Competitive Intelligence dual gap matrix** (Phase 4.4) | Backlink and AI-citation data per competitor is gated by tools in Sections 1 and 2. |
| **#11 Platform-Specific Optimization Matrix** (Deliverable 11) | Strategic recommendations possible from public research; current-state baselines need Section 2 unblock. |
| **#12 KPI Dashboard wiring** (Phase 10.3) | I can recommend the stack; wiring it needs Section 5 access. |

---

## Suggested next actions to unblock the most-blocking items

1. **Grant me read access to:** Google Search Console, Google Analytics 4, and one rank-tracking tool (Ahrefs or SEMrush). This alone unblocks ~60% of the measurement + competitive items.
2. **Have someone manually run the AI Visibility Baseline** — prompt the top 5-10 queries through ChatGPT, Claude, and Perplexity once, record results in a Google Sheet, share it. Repeat monthly. This unblocks the entire AEO baseline.
3. **30-minute interview with each doctor** — recorded — to capture first-hand expertise quotes, case anecdotes, and unique points of view. This unblocks the information-gain content strategy.
4. **Confirm Google Business Profile / Bing Places / Apple Maps ownership** — these power AI engines (Copilot ← Bing, Apple Intelligence ← Apple Maps). At minimum, they need to be claimed and complete.

Once any of these clear, the corresponding items move from this file to the active execution list.

---

*Generated from CTM SEO+AEO Domination Prompt v2.0 audit on initial review. Will be updated as items resolve.*
