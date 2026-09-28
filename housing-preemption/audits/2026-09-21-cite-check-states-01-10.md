# Cite-Check Memorandum: State Housing-Planning Inventory, States 1–10

| | |
|---|---|
| **Re** | Accuracy of the coded status and supporting evidence for population ranks 1–10 (CA, TX, FL, NY, PA, IL, OH, GA, NC, MI) in `housing-plans-evidence.json` and `housing-plans-comparison.csv` |
| **Requested by** | Olivia Martin |
| **Prepared by** | Claude (Fable 5.1), machine-assisted second-pass review. This is not the "independent human validation" the page says is pending. |
| **Date of check** | September 21, 2026 (sources retrieved 23:20–23:45 UTC) |
| **Record audited** | Git commit `820cbbb1a5cf5aa88956d23f3b5e848d404c2820` · JSON SHA-256 `4960ae5c…7b09` · CSV SHA-256 `9dbc0000…8972` (full hashes in Appendix A) |
| **Bottom line** | All ten coded statuses are supported by the cited primary text. All 23 quoted excerpts are verbatim. All pin cites resolve. No classification, quotation, or pin-cite errors were found. Eight precision and completeness items are flagged for the author (Part VII), one of which (North Carolina's coastal caveat) can now be sourced. |

---

## I. Scope and standard of review

**What was checked.** For each of the ten states, every field that carries a coded "status" on the public page was tested against the cited source: the housing-duty code (`requirement`), the assessor code (`assessment_actor`), the allocation code (`allocation`), each content-cell status (`contents[].status`), the `review_status` flag, and the prose fields that justify them (`plan_mandate`, `housing_duty`, `coverage`, `assessment_*`, `allocation_*`, `enforcement`, `key_distinction`, `uncertainties`). Population and rank were also re-derived from the Census file the record names.

**Standard.** Each source was re-retrieved on September 21, 2026 from the URL in the record and read in full at the cited locator. A claim is **CONFIRMED** only if (1) the quoted excerpt appears verbatim in the retrieved text, (2) the subsection cited actually contains the proposition attributed to it, (3) the coded status is the fair reading of that text under the inventory's own published definitions, and (4) the version note matches the page's own amendment credit. Where the record makes a negative finding ("no requirement found"), the check asked whether the cited chapter is fairly read as silent and ran a non-exhaustive web search for a newer enactment.

**Verdict codes used below.**

| Code | Meaning |
|---|---|
| **CONFIRMED** | Quotation verbatim; pin cite accurate; coded status supported; version note accurate. |
| **CONFIRMED · NOTE** | Same, with a precision or completeness note that does not change the status. |
| **ERROR** | The record is wrong. Correction stated. *(None issued.)* |
| **NOT VERIFIED** | Source could not be retrieved in this pass. *(None; every cited URL was reached, two only via a rendered browser session.)* |

**What "verbatim" allows.** The record's `quote` fields are short excerpts. An excerpt counts as verbatim when its words appear in the same order in the retrieved text; truncation at either end is permitted and is noted where the omitted words matter.

## II. Materials examined

| Item | Location | Note |
|---|---|---|
| Evidence record | `housing-preemption/housing-plans-evidence.json` (schema 2, `checked_on` 2026-09-20) | 50 states; first 10 audited |
| Comparison sheet | `housing-preemption/housing-plans-comparison.csv` | Field-for-field match to JSON confirmed for all 10 (Part III.1) |
| Page rendering | `housing-preemption/index.html`, section "What must cities plan for?" | Confirms which fields drive the displayed status |
| Older exports | `~/Downloads/housing-plans-evidence.json`, `~/Downloads/state-housing-plans-evidence-2026-09-20.json` | Schema 1, 30 states. Superseded; not audited |
| Source snapshots | `housing-preemption/audits/snapshots/2026-09-21/` (plain text, one file per cited URL) | Hashes in Appendix A. Not yet committed |
| Population file | Census `NST-EST2025-ALLDATA.csv`, re-downloaded | SHA-256 matches the hash recorded in the JSON |

No Excel workbook exists in the repository or on this machine for this project; the CSV and JSON are the evidence sheets audited.

## III. Cross-cutting findings

### III.1 Dataset integrity (all CONFIRMED)

- **CSV ↔ JSON.** For all ten states, the 17 scalar fields, the `uncertainties` list, the `sources` list, and the `contents` column in the CSV are identical to the JSON. The CSV is a faithful flattening.
- **Source-id integrity.** Every `source_ids` reference in `evidence[]` and `contents[]` resolves to a `sources[]` entry. Two sources are defined but never referenced: `ny-s2084` and `il-hb5198` (Part VII, item 3).
- **Population.** The Census file was re-downloaded; its SHA-256 is `92188e29cb0a67dcf95afa7d6c47359409782f086478b70ea4128eb70e223ca9`, matching the JSON. Applying the recorded method (SUMLEV 040, drop DC and PR, rank by POPESTIMATE2025) reproduces ranks 1–10 and every population figure exactly.
- **Review flag.** All ten carry `review_status: source_checked`. This audit concurs that each was source-checked. It does not upgrade that flag; see Part VII, item 8.

### III.2 Quotation and pin-cite tally

| Metric | Result |
|---|---|
| Cited sources (states 1–10) | 23 |
| Quotations verbatim | 23 of 23 |
| Pin cites (subsection locators) resolving to the attributed proposition | All checked locators resolve (roughly 60 subsection references) |
| Version notes matching the page's own amendment credit | 21 of 23 exact; 2 accurate but non-specific (Part VII, item 1) |
| Coded statuses requiring change | 0 |

### III.3 Retrieval reproducibility

Three sites do not serve the cited URL to a non-browser client. This matters for anyone re-running the trail with a script.

| Site | Behavior on 2026-09-21 | How the text was obtained |
|---|---|---|
| `nysenate.gov` (4 NY sources) | HTTP 403, Cloudflare interstitial ("Just a moment…") to `curl` | Rendered browser session; full statute text captured |
| `rules.sos.ga.gov` (GA) | HTTP 403 to `curl` | Rendered browser session; full rule text captured |
| `reports.oah.state.nc.us` (NC coastal rule, not in the record) | Connection refused on every attempt | DEQ's compiled PDF of Subchapter 7B used instead (Part VI.9) |

The California `leginfo` pages, which are often assumed to be script-only, served the full statute text to `curl`.

## IV. Summary by state

| # | State | Coded status (duty / assessor / allocation) | Verdict | Items |
|---|---|---|---|---|
| 1 | California | required_statewide / state / state_or_regional | CONFIRMED · NOTE | Two version notes non-specific; one citation string omits a subsection the locator uses |
| 2 | Texas | no_explicit_requirement / not_required_or_specified / none_identified | CONFIRMED · NOTE | Boilerplate enforcement reasoning |
| 3 | Florida | required_statewide / local / local_assessment | CONFIRMED | — |
| 4 | New York | encouraged / not_required_or_specified / none_identified | CONFIRMED · NOTE | S2084 source unreferenced; bill history worth recording |
| 5 | Pennsylvania | required_if_plan / local_or_regional / local_assessment | CONFIRMED · NOTE | Coverage rests on MPC §107, which is not in the locator |
| 6 | Illinois | required_subset / benchmark_only / capacity_target | CONFIRMED · NOTE | "Informational bands do not affect exemptions" is an inference; HB5198 source unreferenced; boilerplate |
| 7 | Ohio | no_explicit_requirement / not_required_or_specified / none_identified | CONFIRMED · NOTE | Boilerplate enforcement reasoning |
| 8 | Georgia | required_subset / local / local_assessment | CONFIRMED · NOTE | URL not machine-fetchable; enabling statute uncited |
| 9 | North Carolina | encouraged / not_required_or_specified / none_identified | CONFIRMED · NOTE | Coastal housing-stock rule now retrieved; caveat can be sourced; classification question for the author |
| 10 | Michigan | required_if_plan / local / local_assessment | CONFIRMED | — |

## V. How to read the state sections

Each state section lists: (a) the coded statuses under review; (b) a source table with the quotation check, the pin-cite check, and the version check; (c) a short analysis of whether the text supports the codes; and (d) any recommended edits. Verbatim text from the retrieved source is set in quotation marks. Everything quoted below can be located in the snapshot file named in Appendix A.

## VI. State-by-state cite check

### VI.1 California — CONFIRMED · NOTE

**Coded:** `requirement` required_statewide · `assessment_actor` state · `allocation` state_or_regional · `allocation_authority` "Councils of governments; HCD where no COG" · 9 content cells, all `required`.

| Source id | Cited as | Quotation | Pin cites | Version note | Verdict |
|---|---|---|---|---|---|
| ca-65300 | Gov. Code §65300 | Verbatim: "Chartered cities shall adopt general plans which contain the mandatory elements specified in Section 65302." | Whole section. Also supplies the universal duty: "the legislative body of each county and city shall adopt a comprehensive, long-term general plan". | Page credit: Stats. 1984, ch. 1009, §3. Record says "current official code". Accurate. | CONFIRMED |
| ca-65302 | §65302(c) | Verbatim excerpt. Full clause: "(c) A housing element as provided in Article 10.6 (commencing with Section 65580)." | (c) is the housing element. | Page credit: Stats. 2025, ch. 67, §102 (AB 1170), eff. Jan. 1, 2026. Record says only "current official code displayed on access". | CONFIRMED · NOTE |
| ca-65583 | §65583 | Verbatim at (a)(3): "An inventory of land suitable and available for residential development". | (a)(1) local need "shall include the locality's share of the regional housing need in accordance with Section 65584"; (a)(3) sites inventory incl. fair-housing relationship; (a)(9) at-risk assisted housing; (b)(1) quantified objectives; (b)(2) "the quantified objectives need not be identical to the total housing needs" (supports `key_distinction`); (c) scheduled program; (c)(2) seventh-cycle "acutely low income households"; (c)(6) preservation; (c)(10)(A) affirmatively further fair housing. All resolve. | Page credit: Stats. 2025, ch. 514, §1.1 (SB 340), eff. Jan. 1, 2026. Record says only "current official code displayed on access". | CONFIRMED · NOTE |
| ca-65584 | §65584(a), (b), (f) | Verbatim at (b)(2): "allocates a share of the regional housing need to each city, county, or city and county". | (b)(1)(A): "The department, in consultation with each council of governments, shall determine each region's existing and projected housing need"; (b)(1)(B): HCD determines for cities and counties without a COG; (b)(2): COG, "or for cities and counties without a council of governments, the department", adopts the allocation plan; (d)(1): plan "shall allocate units for extremely low and acutely low income households"; (f)(2): seventh-cycle income levels per §65582. The record's evidence reasoning ("(b)(1) … HCD; (b)(2) … municipal apportionment") is exactly right. | AB 1275 = Stats. 2025, ch. 593, §1, eff. Jan. 1, 2026. Matches. | CONFIRMED · NOTE (citation string lists (a), (b), (f); locator adds (d), which the analysis uses) |
| ca-65585 | §65585(b), (h)–(l) | Verbatim at (h): "make a finding as to whether the adopted element or amendment is in substantial compliance". | (b) draft review; (h) adopted-element finding within 60 days; (i)(1)(C) HCD "may revoke its findings"; (j) HCD "shall notify the city … and may notify the office of the Attorney General"; (k) two pre-suit meetings; (l) court order, retained jurisdiction, and fines of $10,000–$100,000 per month escalating by factors of three and six, with receivership under CCP §564. "Refer violations to the Attorney General" is a fair paraphrase of (j). | AB 507 = Stats. 2025, ch. 493, §3, eff. Jan. 1, 2026. Matches. | CONFIRMED |
| ca-65400 | §65400 | Verbatim at (a)(2): "Provide by April 1 of each year an annual report". | (a)(2)(B) progress on regional share; (C) applications; (D) units in applications; (E) approvals and disapprovals by income and opportunity area; (G) rezoned sites; (H) entitlements, permits, certificates of occupancy; (C)(ii), (H)(i)(III)–(IV), (P), (Q) each begin "with the report due by April 1, 2027" (replacement and demolition reporting); (b)(1) HCD correction requests; (b)(2) court order on motion. The record's monitoring cell is an accurate summary. | SB 172 = Stats. 2026, ch. 84, §22, eff. July 13, 2026. Matches. | CONFIRMED |

**Analysis.** The three codes are compelled by the text: a universal plan duty with a mandatory housing element (§§65300, 65302(c)); HCD as the calculator of regional need (§65584(b)(1)); COGs, or HCD by default, as the allocator (§65584(b)(2)). No county or city is exempt and no population threshold appears. Enforcement and monitoring descriptions track (i)–(l) of §65585 and (a)(2)–(b) of §65400.

**Recommended edits.** Record the specific 2025 amendment credits in the version notes for `ca-65302` and `ca-65583`; add "(d)" to the `ca-65584` citation string so citation and locator agree.

### VI.2 Texas — CONFIRMED · NOTE

**Coded:** no_explicit_requirement · not_required_or_specified · none_identified · no content cells.

| Source id | Cited as | Quotation | Pin cites | Version note | Verdict |
|---|---|---|---|---|---|
| tx-213 | Tex. Loc. Gov't Code §§213.001–.005 (official chapter PDF) | Verbatim, §213.002(a), second sentence: "A municipality may define the content and design of a comprehensive plan." | (a): governing body "may adopt a comprehensive plan" and may define content and design; (b): plan "may … include but is not limited to provisions on land use, transportation, and public facilities" (housing not named); (c): municipality defines the plan/regulation relationship; (d): impact-fee land use assumptions; §213.003(a): adoption by ordinance after a hearing and "review by the municipality's planning commission or department, if one exists"; §213.004: chapter does not limit "other plans, policies, or strategies as required"; §213.005: map must state a plan "shall not constitute zoning regulations". The record's placement of the content delegation in (a) and the optional-subject list in (b) is correct. | Source notes: added Acts 1997, 75th Leg., ch. 459; renumbered 2001. Record's "source note remains 2001" is accurate. | CONFIRMED |

**Analysis.** The chapter is permissive throughout and never mentions housing. The negative codes are a fair reading, and the record properly scopes them to Chapter 213. A non-exhaustive web search on September 21, 2026 surfaced no 2025–2026 Texas enactment imposing a municipal housing element; the 2025 preemption bills (small-lot, commercial-to-residential) change zoning, not planning duties. Neither Chapter 211 (zoning) nor Government Code Chapter 2306 (the state low-income housing plan) is cited, and neither is known to impose a municipal housing element; if the author wants the negative finding to be airtight, name them as reviewed-and-excluded.

**Recommended edit.** The `evidence[enforcement].reasoning` sentence ("The cited planning or housing-plan provisions support the stated procedure and scoped enforcement finding; no unit-production guarantee is inferred.") is identical in TX, IL, and OH. Replace with the Texas-specific point already stated in the `enforcement` field (§213.003 hearing and review; no certification mechanism).

### VI.3 Florida — CONFIRMED

**Coded:** required_statewide · local · local_assessment · 5 content cells `required`.

| Source id | Cited as | Quotation | Pin cites | Version note | Verdict |
|---|---|---|---|---|---|
| fl-3167 | Fla. Stat. §163.3167(1)–(3) | Verbatim at (2): "Each local government shall maintain a comprehensive plan". | (1) municipalities and counties have "power and responsibility" to plan; (2) duty to maintain; (3) new municipality establishes a local planning agency within 1 year and adopts a plan within 3 years, "A county comprehensive plan is controlling until the municipality adopts a comprehensive plan". Matches `coverage`. | 2026 Florida Statutes; history ends "s. 1, ch. 2024-234". Record: "Current official text read September 20, 2026." Accurate. | CONFIRMED |
| fl-3177 | §163.3177(1)(d), (1)(f), (6)(f) | Verbatim at (6)(f)1: "A housing element consisting of principles, guidelines, standards, and strategies". | (1)(d): plan "shall identify procedures for monitoring, evaluating, and appraising implementation of the plan"; (1)(f)3: projections from the Office of Economic and Demographic Research or a "professionally acceptable methodology", plan based on "at least the minimum amount of land required to accommodate the medium projections … for at least a 10-year planning period", and municipal projections "must, at a minimum, be reflective of each area's proportional share of the total county population and the total county population growth"; (5)(b): guidelines or policies for implementation; (6)(f)1.a–g: housing element scope incl. 1.d adequate sites for workforce, low-, very-low-, moderate-income housing; (6)(f)2: analysis "shall include … a projection of the anticipated number of households by size, income range, and age of residents derived from the population projections, and the minimum housing need"; (6)(f)3: partnerships, streamlined permitting, reduced costs and delays. All resolve. | Same. | CONFIRMED |

**Analysis.** The housing element is mandatory for every local government that must plan, which is every municipality and county; nothing in (6)(f) exempts by size. The needs analysis is prepared locally from state or locally generated projections. The state supplies a population floor and a county-proportionality rule but assigns no housing-unit share, so `local` and `local_assessment` are correct, and the record's contrast with California's RHNA is accurate. The "other" content cell (adequate future sites without a parcel-level inventory) correctly reads (6)(f)1.d.

### VI.4 New York — CONFIRMED · NOTE

**Coded:** encouraged · not_required_or_specified · none_identified · 2 content cells `encouraged`.

| Source id | Cited as | Quotation | Pin cites | Version note | Verdict |
|---|---|---|---|---|---|
| ny-city | Gen. City Law §28-a(1), (2)(h), (4)(h), (12) | Verbatim at (4)(h): "Existing housing resources and future housing needs, including affordable housing." | (1) Application: "This section shall not apply in a city having a population of more than one million" (record's "no greater than one million" is equivalent); (2)(h): "It is the intent of the legislature to encourage, but not to require, the preparation and adoption of a comprehensive plan"; (4): plan "may include the following topics"; (12)(a): "All city land use regulations must be in accordance with a comprehensive plan adopted pursuant to this section." | Page shows most recent revision 2014-09-22. Record: read Sept. 20, 2026. Accurate. | CONFIRMED |
| ny-town | Town Law §272-a(1)(h), (3)(h), (11) | Verbatim: "encourage, but not to require". | (1)(h) intent; (3)(h) same optional housing topic; (11)(a) land use regulations must accord. | Same. | CONFIRMED |
| ny-village | Village Law §7-722(1)(h), (3)(h), (11) | Verbatim: "encourage, but not to require". | (1)(h), (3)(h), (11)(a) parallel. (Source text reads "affect that status" where the city and town versions read "the status"; immaterial.) | Same. | CONFIRMED |
| ny-s2084 | S2084 (2025–2026) status | Verbatim: "In Assembly Committee". | Status page shows: passed Senate May 28, 2025 and again March 19, 2026; referred to Assembly Local Governments; same-as A49; would amend GML §239-d, GCT §28-a, Town Law §272-a, Village Law §7-722. Its operative text requires a municipality only to "determine whether it is in the public interest to" prepare or update a plan "to ensure that it addresses housing needs". Even if enacted it would not create a housing-element mandate. | Accurate. | CONFIRMED · NOTE |

**Analysis.** Three parallel statutes make the plan optional and housing an optional topic within it; the consistency rule in (12)/(11) bites only once a plan exists. The codes are correct. The NYC carve-out is properly flagged as an uncertainty rather than coded.

**Recommended edits.** `ny-s2084` is defined but no `evidence[]` or `contents[]` entry cites it; attach it to `evidence[requirement]` or move the point into `key_distinction` with the citation. Consider recording the bill's two Senate passages and the "determine whether it is in the public interest" framing, since a reader could otherwise assume the bill is a mandate.

### VI.5 Pennsylvania — CONFIRMED · NOTE

**Coded:** required_if_plan · local_or_regional · local_assessment · content cells: needs_assessment `required`, implementation `required`, income_groups `encouraged`, preservation `encouraged`.

| Source id | Cited as | Quotation | Pin cites | Version note | Verdict |
|---|---|---|---|---|---|
| pa-mpc | MPC, Act 247 of 1968, §§301(a)(2.1), 301.2–301.4, 302, 303, 1103 | Verbatim at §301(a)(2.1): "A plan to meet the housing needs of present residents". | §301(a): plan "shall include, but need not be limited to" listed elements; (2.1) housing plan "which may include conservation of presently sound housing, rehabilitation … and the accommodation of expected new housing in different dwelling types and at appropriate densities for households of all income levels" (supports `required` needs cell and `encouraged` income/preservation cells); §301.2: planning agency "shall make careful surveys, studies and analyses of housing, demographic, and economic characteristics and trends"; §301.3: referral to county, contiguous municipalities, school district 45 days before hearing; §301.4(a): county "shall … prepare and adopt a comprehensive plan" and municipal plans "shall be generally consistent"; §302(a): "The governing body may adopt and amend the comprehensive plan"; §303(c): verbatim "no action by the governing body of a municipality shall be invalid nor shall the same be subject to challenge or appeal on the basis that such action is inconsistent with, or fails to comply with, the provision of a comprehensive plan"; §1103(a): multimunicipal plan "may be developed by the municipalities or, at the request of the municipalities, by the county planning agency" and must include the housing plan "for the region of the plan". All resolve. | Consolidated act as reenacted Dec. 21, 1988. Record: read Sept. 20, 2026. Accurate. | CONFIRMED · NOTE |

**Analysis.** Adoption is permissive (§302(a)); content is mandatory once a plan is prepared (§301(a)); the housing analysis may be done municipally or regionally (§§301.2, 1103(a)); no external unit share exists. All three codes follow. The `coverage` statement that the MPC does not govern first- and second-class cities is correct, but it rests on the §107 definition of "Municipality" ("any city of the second class A or third class, borough, incorporated town, township of the first or second class, county of the second class through eighth class, home rule municipality…"), which the locator does not cite.

**Recommended edit.** Add §107 (definition of "Municipality") and the Act's title clause to the `pa-mpc` locator so the Philadelphia/Pittsburgh exclusion is traceable.

### VI.6 Illinois — CONFIRMED · NOTE

**Coded:** required_subset · benchmark_only · capacity_target · 7 content cells `required`.

| Source id | Cited as | Quotation | Pin cites | Version note | Verdict |
|---|---|---|---|---|---|
| il-25 | 310 ILCS 67/25 | Verbatim at (a): "all non-exempt local governments must approve an affordable housing plan". | (a): 18 months from notification for a government "determined … to be non-exempt for the first time based on the recalculation of U.S. Census Bureau data after 2010"; (b)(i) units needed to reach exemption; (b)(ii) lands and structures incl. developer-committed and publicly owned; (b)(iii) incentives; (b)(iv) constraints incl. policies "that do not affirmatively further fair housing"; (b)(v) mitigation; (b)(vi) goals: "a minimum of 15% of all new development or redevelopment … a minimum of a 5 percentage point increase … or a minimum of a total of 10% affordable housing"; (b)(vii) timelines "within the first 24 months"; unnumbered paragraphs: progress summary for prior plans and a report to IHDA "no later than 4 years after adopting or updating"; (c) copy to IHDA within 60 days; (f) IHDA "shall notify any local government and may notify the Office of the Attorney General … The Attorney General may enforce this provision of the Act by an action for mandamus or injunction or by means of other appropriate relief." All seven content cells and the enforcement text resolve. | Source line: "P.A. 102-175, eff. 7-29-21; 103-487, eff. 1-1-24." Matches record. | CONFIRMED |
| il-act | 310 ILCS 67/15, /20, /30, /70 | Verbatim in §15: "or any municipality with a population under 1,000". | §15: "Exempt local government" is one with "at least 10% of its total year-round housing units … affordable, as determined by the Illinois Housing Development Authority in accordance with Section 20, or any municipality with a population under 1,000"; "Local government" means "a county or municipality" (supports "counties also covered"); §20(b): owner units affordable below 80% and rental units below 60% of county or PMSA median, divided by total year-round units; §20(c): list at least every 5 years with notice to non-exempt governments; §20(e)–(f): additional bands at or below 30% and 60–140%, published at least every 5 years; §30(b-5): appeals "Beginning January 1, 2026"; §70: home-rule limitation. | §20 source line "P.A. 104-319, eff. 1-1-26". Matches record. | CONFIRMED · NOTE |
| il-hb5198 | HB5198 (104th G.A.) status | Verbatim: "Rule 3-9(a) / Re-referred to Assignments", last action 6/01/2026. | Page also shows: House third reading passed April 15, 2026 (74-37-1); arrived in Senate April 16; assigned to Executive April 28; re-referred to Assignments June 1. House Floor Amendment 1 would raise the exemption threshold to 25% and the population floor to 2,000. Not enacted. | Accurate. | CONFIRMED · NOTE |
| il-ihda | IHDA AHPAA page | Verbatim page title. | Page states the most recent determination was completed December 2023 and lists 2025 and 2026 plan submissions marked compliant or non-compliant. | Accurate. | CONFIRMED |

**Analysis.** The duty runs to a defined subset (population ≥ 1,000 and < 10% affordable stock), so `required_subset` is right and the record's reading that a municipality of exactly 1,000 is not population-exempt is correct ("under 1,000"). IHDA computes an existing-stock ratio, not a forecast of need, and the statutory goals are uniform benchmarks rather than a divided regional total; `benchmark_only` and `capacity_target` follow under the inventory's definitions.

**Two notes.** (1) The record twice states that the new §20(e) income-band calculations "do not affect exemptions." Subsections (e)–(f) are silent on exemption; the conclusion follows because §15 ties exemption to the affordability test in §20(b), not to the (e) bands. The reasoning is sound but should be labeled an inference from structure rather than an express provision. (2) `il-hb5198` is defined but unreferenced (Part VII, item 3). The `evidence[enforcement].reasoning` boilerplate noted for Texas recurs here.

### VI.7 Ohio — CONFIRMED · NOTE

**Coded:** no_explicit_requirement · not_required_or_specified · none_identified · no content cells.

| Source id | Cited as | Quotation | Pin cites | Version note | Verdict |
|---|---|---|---|---|---|
| oh-71301 | ORC §713.01 | Verbatim: "may establish a city planning commission". | Section authorizes, in separate paragraphs, cities with and without a board of park commissioners, cities under commission and city-manager plans, and "each village" to establish a commission. Supports the record's "cities and villages". | Page: effective September 29, 2017; latest legislation HB 49, 132nd G.A. Matches record. | CONFIRMED |
| oh-71302 | ORC §713.02 | Verbatim: "shall make plans and maps". | Enumerated recommendations cover streets and public ways, parks and public grounds, public buildings, utilities and terminals, and changes to them; no housing subject appears. Public-project approval requirement with two-thirds legislative override. Supports `enforcement` text. | Page: effective November 4, 1965; HB 906, 106th G.A. Matches record. | CONFIRMED |

**Analysis.** A discretionary commission with a mandatory but physical-infrastructure planning brief is fairly coded as no explicit housing requirement. A non-exhaustive web search on September 21, 2026 found no 2025–2026 Ohio statute imposing a municipal housing element; search summaries describe HB 313 (136th G.A.) as a pro-housing grant incentive, which would not change the code even if enacted (enactment not verified here). The record's caveat that charter provisions may add duties is appropriate.

**Recommended edit.** Replace the boilerplate `evidence[enforcement].reasoning` sentence with the Ohio-specific point (project review and override under §713.02; no housing certification).

### VI.8 Georgia — CONFIRMED · NOTE

**Coded:** required_subset · local · local_assessment · 3 content cells `required`.

| Source id | Cited as | Quotation | Pin cites | Version note | Verdict |
|---|---|---|---|---|---|
| ga-rules | Ga. Comp. R. & Regs. 110-12-1-.02; -.03(9) | Verbatim excerpt of the (9) parenthetical. Full: "(Required for Community Development Block Grant Entitlement Communities, optional but encouraged for all other local governments. Updates at local discretion.)" | .02 preamble: "In order to maintain qualified local government certification, and thereby remain eligible for selected state funding and permitting programs, each local government must prepare, adopt, maintain, and implement a comprehensive plan"; .02(1) table: Housing Element required for "HUD CDBG Entitlement Communities"; .02(4): Regional Commission and Department review; .02(6): alternative planning requirements on application; .03(9): factors "housing types and mix, condition and occupancy, local cost of housing, cost-burdened households in the community, jobs-housing balance, housing needs of special populations, and availability of housing options across the life cycle"; Consolidated Plan analysis "may be substituted" but goals, needs and opportunities, and work program items "must be explicitly integrated"; .04(1)(f)–(g) Regional Commission and Department review, (j) adoption required to keep certification, (l) certification extended on adoption. All three content cells resolve. | .01: "These rules become effective October 1, 2018." Matches record. | CONFIRMED · NOTE |

**Analysis.** The trigger is HUD CDBG entitlement status, a subset; the analysis is of local stock adequacy; no unit share is assigned. All three codes follow. The `key_distinction` that the required analysis inventories existing stock rather than developable sites is an accurate reading of .03(9).

**Notes.** The cited URL returns HTTP 403 to non-browser clients; the text was verified from a rendered browser session. The requirement rests entirely on a Department of Community Affairs rule; the rule's own authority clause ("O.C.G.A. 50-8-1 et seq.") is not carried into the record. Add the retrieval method to the version note and consider citing the enabling statute.

### VI.9 North Carolina — CONFIRMED · NOTE (open classification question)

**Coded:** encouraged · not_required_or_specified · none_identified · 2 content cells `encouraged` · one recorded uncertainty about the coastal rule.

| Source id | Cited as | Quotation | Pin cites | Version note | Verdict |
|---|---|---|---|---|---|
| nc-501 | G.S. §160D-501(a)–(c), §160D-503 | Verbatim at (b): "A comprehensive plan may, among other topics, address any of the following". | (a): "As a condition of adopting and applying zoning regulations under this Chapter, a local government shall adopt and reasonably maintain a comprehensive plan or land-use plan"; (a1): "A local government may prepare and adopt other plans … housing plans"; (b)(5): "Housing with a range of types and affordability to accommodate persons and households of all types and income levels"; (c): plans "shall be advisory in nature without independent regulatory effect" and must be considered in rezonings under §§160D-604, -605. History: 2019-111, 2020-3, 2020-25. All resolve. | Record: read Sept. 20, 2026. Accurate. | CONFIRMED |

**Coastal rule (the recorded uncertainty).** The record says the official coastal-rule server could not be retrieved and that secondary text indicates 15A NCAC 07B .0702 requires housing-stock estimates. This pass reproduced the outage (connection refused at `reports.oah.state.nc.us`) and then retrieved the Division of Coastal Management's compiled Subchapter 7B PDF (`files.nc.gov/ncdeq/Coastal Management/documents/PDF/CAMA/t15a_07b.pdf`, PDF created February 1, 2016). Rule .0702(c)(1)(B) reads verbatim:

> "Housing stock: The plan shall include an estimate of current housing stock, including permanent and seasonal units, tenure, and types of units (single-family, multifamily, and manufactured)."

History note in that compilation: "Authority G.S. 113A-102; 113A-107(a); 113A-110, 113A-111, 113A-124; Eff. August 1, 2002; Amended Eff. April 1, 2003; Readopted and Amended Eff. February 1, 2016." Search results describe a 2024–2025 Coastal Resources Commission periodic review that classified the rule as necessary; that report was not readable in this pass and is unverified.

**Analysis.** The general-statute codes are correct. The coastal rule is a mandatory descriptive housing-stock estimate inside CAMA land use plans, which G.S. 113A-110 requires of coastal counties. Under the inventory's own definitions two readings are open: keep `encouraged` for the general regime with a sourced coastal caveat (the record's current approach), or treat the coastal counties as a geographic subset with a required stock benchmark, which is how Illinois's stock-based regime is coded (`required_subset` / `benchmark_only`). The record's `key_distinction` already draws the right line ("stock description is not a housing-needs allocation"). This is the author's judgment call, not an error.

**Recommended edits.** Convert the `uncertainties` entry into a cited caveat using the DEQ compilation (with its 2016 date and the OAH outage noted), and either state why the coastal stock estimate does not move the duty code or move it to `required_subset` for consistency with Illinois.

### VI.10 Michigan — CONFIRMED

**Coded:** required_if_plan · local · local_assessment · 3 content cells `required`.

| Source id | Cited as | Quotation | Pin cites | Version note | Verdict |
|---|---|---|---|---|---|
| mi-mpea | MCL §§125.3807, .3811, .3831, .3833(2)(e), .3845(2), .3881(1) (official compiled PDF) | Verbatim at §33(2)(e): "An assessment of the community's existing and forecasted housing demands". Full clause adds "with strategies and policies for addressing those demands." | §7(1): "A local unit of government may adopt, amend, and implement a master plan"; §11(1): "may adopt an ordinance creating a planning commission"; §31(1): "A planning commission shall make and approve a master plan … subject to section 81"; §33(2): plan "must also include those of the following subjects that reasonably can be considered as pertinent to the future development of the planning jurisdiction" (the "pertinence qualification"); §33(2)(e) as quoted; §45(2): "At least every 5 years … a planning commission shall review the master plan and determine whether to commence the procedure to amend … The review and its findings shall be recorded in the minutes"; §81(1): a carried-forward plan "is not subject to the requirements of section 33 until it is first amended under this act." All resolve. | §33 history: "Am. 2024, Act 153, Eff. Apr. 2, 2025." PDF footer: "Rendered Saturday, September 5, 2026 … Complete Through PA 91 of 2026." Both match the record exactly. | CONFIRMED |

**Analysis.** Planning is optional; once a commission exists it must plan; the plan must assess housing demand subject to pertinence; no external number exists. `required_if_plan`, `local`, and `local_assessment` follow. The `key_distinction` warning that a claim of statutory silence "misses the 2025-effective amendment" is well founded.

## VII. Consolidated list of recommended edits

None of these changes a coded status. They are listed in the order a reviser would encounter them.

1. **CA version notes.** `ca-65302` and `ca-65583` say "Current official code displayed on access"; the pages carry Stats. 2025, ch. 67 (AB 1170) and Stats. 2025, ch. 514 (SB 340), both effective January 1, 2026. Record them as the other four CA sources do.
2. **CA citation string.** `ca-65584` cites "(a), (b), (f)" but the locator and analysis rely on (d)(1). Add "(d)".
3. **Unreferenced sources.** `ny-s2084` and `il-hb5198` are defined but cited by no `evidence[]` or `contents[]` entry. Attach each to the claim it supports (both bear on `requirement`) so the page's "Statutory trail" shows why they are there.
4. **PA coverage citation.** Add MPC §107 (definition of "Municipality") to the `pa-mpc` locator; it is the provision that excludes Philadelphia and Pittsburgh.
5. **IL inference labeling.** In `assessment_method` and `il-act.version_note`, state that the conclusion that §20(e) bands do not affect exemptions is drawn from §15's definition, not from express text in §20(e)–(f).
6. **Boilerplate reasoning.** The identical `evidence[enforcement].reasoning` sentence in TX, IL, and OH should be replaced with state-specific reasoning; as written it does not tell a reader what was read.
7. **Retrieval method.** Note in the version notes for the four NY sources and the GA source that the URL requires a rendered browser session; a scripted re-check will otherwise report a false failure.
8. **NC coastal caveat.** Replace the uncertainty with the sourced caveat in Part VI.9 and decide the classification question there.
9. **Audit field.** Rather than changing `review_status`, add a per-state audit record (date, reviewer, result, memo path) so a second-pass check is distinguishable from the first-pass label and from the human validation still pending.

## VIII. Limits of this check

- **Not human validation.** This is a machine-assisted second reading by Claude. The page's statement that independent human validation is pending remains true.
- **Negative findings.** For TX, OH, and NY the check confirms that the cited chapters are silent and ran one non-exhaustive web search per state for newer enactments. It did not survey every title of each state's code.
- **NC coastal text.** Verified from a DEQ compilation dated 2016, not from the Office of Administrative Hearings' official codification, which was unreachable. The 2024–2025 periodic-review outcome is unverified.
- **Ohio HB 313.** Its description as an incentive program comes from search summaries, not from the bill text or status page.
- **Statutes versus practice.** Nothing here tests whether any state enforces what its text says.

## Appendix A. Retrieval log

All retrievals on September 21, 2026 between 23:20 and 23:45 UTC. "Method" is `curl` unless noted. Snapshot files are plain-text extractions saved under `housing-preemption/audits/snapshots/2026-09-21/`; hashes are SHA-256 of the saved text file.

| State | Source id | URL | HTTP | Method | Snapshot file | SHA-256 (first 16) | Bytes |
|---|---|---|---|---|---|---|---|
| CA | ca-65300 | leginfo.legislature.ca.gov …sectionNum=65300.&lawCode=GOV | 200 | curl | CA_ca-65300.txt | ecb312ac756d241d | 1,736 |
| CA | ca-65302 | …sectionNum=65302.&lawCode=GOV | 200 | curl | CA_ca-65302.txt | 2cfbeaa7f90e5156 | 34,687 |
| CA | ca-65583 | …sectionNum=65583.&lawCode=GOV | 200 | curl | CA_ca-65583.txt | 3f1111666aa6f1e2 | 40,473 |
| CA | ca-65584 | …sectionNum=65584.&lawCode=GOV | 200 | curl | CA_ca-65584.txt | 00feee6a9cb3d35d | 8,615 |
| CA | ca-65585 | …sectionNum=65585.&lawCode=GOV | 200 | curl | CA_ca-65585.txt | 88120c3a2b00ea9a | 18,281 |
| CA | ca-65400 | …sectionNum=65400.&lawCode=GOV | 200 | curl | CA_ca-65400.txt | 61e0ae561197b849 | 17,195 |
| TX | tx-213 | tcss.legis.texas.gov/resources/LG/pdf/LG.213.pdf | 200 | curl + pypdf | TX_tx-213.txt | 8be647cfdfd3fa66 | 3,089 |
| FL | fl-3167 | flsenate.gov/Laws/Statutes/2026/163.3167 | 200 | curl | FL_fl-3167.txt | 4a3031ae4bf6aa07 | 10,298 |
| FL | fl-3177 | flsenate.gov/Laws/Statutes/2026/163.3177 | 200 | curl | FL_fl-3177.txt | ed97fe8a74dbbe87 | 58,281 |
| NY | ny-city | nysenate.gov/legislation/laws/GCT/28-A | 403 to curl | browser | NY_ny-city.txt | ecc45de8b45d838b | 10,517 |
| NY | ny-town | nysenate.gov/legislation/laws/TWN/272-A | 403 to curl | browser | NY_ny-town.txt | dfe38601a0376ba1 | 10,265 |
| NY | ny-village | nysenate.gov/legislation/laws/VIL/7-722 | 403 to curl | browser | NY_ny-village.txt | 281311b61b686f4c | 10,534 |
| NY | ny-s2084 | nysenate.gov/legislation/bills/2025/S2084 | 403 to curl | browser | NY_ny-s2084.txt | 4f2088898337db24 | 6,650 |
| PA | pa-mpc | legis.state.pa.us/WU01/LI/LI/US/HTM/1968/0/0247..HTM | 200 | curl | PA_pa-mpc.txt | 2cc70f0dd6bea46c | 404,230 |
| IL | il-25 | ilga.gov/Documents/legislation/ilcs/documents/031000670K25.htm | 200 | curl | IL_il-25.txt | 2d613f314c7fcd09 | 9,079 |
| IL | il-act | ilga.gov/Legislation/ILCS/Articles?ActID=2477&ChapterID=29 | 200 | curl | IL_il-act.txt | c40b043db8005825 | 34,190 |
| IL | il-hb5198 | ilga.gov/Legislation/BillStatus?DocNum=5198&DocTypeID=HB&GAID=18… | 200 | curl | IL_il-hb5198.txt | a6b9f673b2b4806e | 8,619 |
| IL | il-ihda | ihda.org/about-ihda/ahpaa/ | 200 | curl | IL_il-ihda.txt | 87f0087c611614f3 | 11,957 |
| OH | oh-71301 | codes.ohio.gov/ohio-revised-code/section-713.01 | 200 | curl | OH_oh-71301.txt | 8cbb1b48e4e7305c | 5,482 |
| OH | oh-71302 | codes.ohio.gov/ohio-revised-code/section-713.02 | 200 | curl | OH_oh-71302.txt | ea2ef0d31a8662375 | 6,259 |
| GA | ga-rules | rules.sos.ga.gov/gac/110-12-1 | 403 to curl | browser | GA_ga-rules.txt | c70b26e320d749cf | 54,977 |
| NC | nc-501 | ncleg.gov/EnactedLegislation/Statutes/HTML/ByArticle/Chapter_160D/Article_5.html | 200 | curl | NC_nc-501.txt | 1f2bb7520baa6a78 | 6,208 |
| NC | (not in record) | files.nc.gov/ncdeq/Coastal Management/documents/PDF/CAMA/t15a_07b.pdf | 200 | fetch + pypdf | NC_cama-07b-deq.txt | 492192a61ca2b4df | 30,735 |
| NC | (not in record) | reports.oah.state.nc.us …/15a ncac 07b .0702.pdf | connection refused | — | — | — | — |
| MI | mi-mpea | legislature.mi.gov/documents/mcl/pdf/mcl-Act-33-of-2008.pdf | 200 | curl + pypdf | MI_mi-mpea.txt | af614f3c652c3374 | 70,217 |
| — | population | www2.census.gov …/NST-EST2025-ALLDATA.csv | 200 | curl | census-NST-EST2025-ALLDATA.csv | 92188e29cb0a67dc (full hash matches JSON) | 53,555 |

Repository state at time of audit: commit `820cbbb1a5cf5aa88956d23f3b5e848d404c2820`, clean working tree before this memo and the snapshot folder were added.
JSON SHA-256: `4960ae5c9cf9989529de923dce23ef381c06194203c47b46ce85aa21e54b7e09`.
CSV SHA-256: `9dbc00003a9e153b0113e2aa1401ffeea9fe599aa3d59ff674bde3645a08e972`.

## Appendix B. Reproduction notes

- HTML pages were reduced to text by stripping tags and unescaping entities; PDFs were extracted with `pypdf`. Line breaks inside quoted statute text were normalized to single spaces before comparison.
- Quotation checks were exact substring matches on the normalized text, then confirmed by reading the surrounding subsection.
- The NY and GA browser captures include site navigation text before the statute; the statute text begins at the section heading.
- To re-run the population check: filter `SUMLEV == 040`, drop "District of Columbia" and "Puerto Rico", sort by `POPESTIMATE2025` descending, compare to `population_rank` and `population` in the JSON.
