# DKB Research & Insights — Drive digest

> Extracted on 19 Oct 2026 (read-only) from the Google Drive folder **04\_Research & Insights** ([https\://drive.google.com/drive/folders/1BPL8BYR8hhOY0xF\_C6082xcbN0iI8P2o](https://drive.google.com/drive/folders/1BPL8BYR8hhOY0xF_C6082xcbN0iI8P2o)). Personal data removed (participants \= P1, P2…). Not readable through Drive: Figma/FigJam/Slides backups (.fig/.jam/.deck), Power BI (.pbix). Skipped on purpose (personal data): call lists, customer databases, address and churn lists.

Contents: A. Interview reports · B. Heuristic evaluation & usability issues · C. Usability & A/B tests · D. CSAT & surveys · E. Research plans

---

## A. Interview Reports — Design Extraction

Source: Google Drive, folder "Interview Reports" (5 files, all read successfully, read-only). Extracted: 2026-10-19. Language: English, with Persian UI terms kept in Persian. Privacy: participant names, staff names, phone numbers, shop/company names tied to people were removed. Participants are referred to as P1, P2… or by segment. All reports share one author (DKB UX Researcher), referred to as "author".

Note on dates: Jalali dates come from the report covers; Gregorian conversions are approximate. Drive "modified" dates (given in the brief) are later than the report dates in several cases.

Contents

1. PLP → Checkout drop-off (B2R)  
2. B2E — Understanding organizational customers  
3. Business Check-in — Impact of recent events / war (B2R)  
4. Gold vertical — Phase 1 research  
5. Tabriz event — field observations (B2R)  
6. Cross-report themes for design  
7. Conflicts with known facts

---

### 1\. Full Report \- PLP ("تحلیل رفتار مشتریان در مسیر PLP تا Checkout")

| Field | Value |
| :---- | :---- |
| File ID | 1KFB48WGpgEgUjvQLUYo6DmiskYzbQSQ0 |
| Report date | مهر ۱۴۰۴ (≈ Sep–Oct 2025); Drive modified 2026-09 |
| Platform | **B2R** (mobile/IT retailers; competitors named are B2B mobile wholesalers) |
| Author | DKB UX Researcher |

**Goal.** Understand why users who reach the PLP do not continue to checkout (never reached the shipping page): their intent on the PLP (buy vs. compare price/stock vs. watch the market), friction points (speed, price clarity, stock), how they compare DKB with competitors, and actionable insights to raise conversion.

**Method & sample.**

- Qualitative, semi-structured phone interviews, 5–7 minutes each, run until theoretical saturation.  
- Sample pulled daily from a PostHog funnel (PLP viewed, no shipping step); random sampling.  
- Calls: **65 total, 34 successful (52.31%)**.  
- Analysis framework: Adele Revella's *Five Rings of Buying Insight* (Priority Initiatives, Success Factors, Perceived Barriers, Decision Criteria, Buyer's Journey). Each statement was coded to one ring.  
- Cities mentioned in quotes: Tehran province (Pakdasht), Kerman, Ardabil, Tabriz.

**Key findings (numbers verbatim).**

- **Intent on PLP is mostly price/stock monitoring, not buying.** The PLP works as a "market-watch / comparison tool" rather than a purchase starting point. Entry reasons: (1) daily price checking and comparison, (2) checking stock across platforms alongside price, (3) curiosity after new sign-up.  
- Market context: dollar volatility → many said they had stopped buying or were afraid to buy.  
- **Price-comparison sources mentioned** (count of mentions): همراه‌تل 19, لیست قیمت‌های بازار علاالدین 9, دیجی‌کالا 9, موبایل ۱۴۰ 9, تکنولایف 7, ای‌ویز 5, ترب 4, کسری پارس 3, فرنا 2, دایان همراه 2, and 1 each for گوشی آنلاین, نیکوتل, تهران پخش, موبومین, بلوبکس, سی‌تله‌کام, لیپک. Some sources (e.g. ترب) are only used for price checks, not purchases.  
- **Purchase cadence:** on average **2–3 purchases per week** (market-dependent); each order **1–10 products**.  
- Buyers check **at least 2–3 sources** before purchase.  
- **A gap of even 150–200 thousand toman above competitors prevents purchase.** If DKB is lowest at the moment of checking → purchase.  
- If prices are similar and the user needs fast delivery, they buy from the faster competitor (needs more research; probably depends on city and delivery SLA).  
- **Barrier categories (mentions):** price 21; stock & assortment 19; delivery 13; قیمت سفارشی (custom price) 8; UX 4; credit 2\.  
- One user reported a sales rep quoting a lower price than the site (seen as a platform weakness; needs investigation).  
- Some users compare DKB B2R only with Digikala main site, where they find prices sometimes lower and assortment wider; DK discount codes make single-unit buying cheaper there.

**Decision criteria (in rough order).**

1. Price and price transparency (always first, but "not enough on its own").  
2. Delivery speed and predictability (they promise delivery times to their own end customers).  
3. Brand credibility and previous experience (cancellations and stock failures lose customers).  
4. Warranty type and authenticity — must be fully clear at purchase. Trusted warranties named by users: Samsung → هماهنگ; Xiaomi → سی‌تله‌کام, آرکا. "۱۸ ماه شرکتی" warranty seen as weak.

**What a successful purchase means to them:** real value (price, quality, service balanced); stable trust (every order like the previous one, no cancellations/errors); precise and fast delivery within the promised window.

**Buyer's journey (non-linear, comparison-driven):**

1. Need to restock → 2\. browse/search online and offline sources → 3\. compare price, stock, shipping cost, past experience, delivery terms → 4\. decide in the moment on price \+ delivery → 5\. buy or leave for another source → 6\. periodic return to check prices.  
- Purchase triggers: volatile market (replace sold items immediately so as not to fall behind), low stock of best-sellers, an end customer asking for a specific item right now.  
- Purchase blockers: volatility/recession/unpredictability, limited stock, high price/large gap, slow/irregular/unpredictable delivery.

**Pain points by area.**

- *Price:* some items pricier than competitors; **large price differences between color variants** (e.g. red/black up to \~600 thousand toman more) create distrust.  
- *Stock & assortment:* item out of stock or only available **سبدی** (as a bundle/basket), which users refuse; slow restocking (days to weeks; "most sites restock in an hour"); **color shown as available on the PDP/PLP but not orderable when selected**; limited/weak warranty options; **order cancelled after payment due to stock failure** (one user: cancelled after 10 days, a big loss; another: 2–3 invoices cancelled → stopped buying).  
- *Delivery:* late vs. selected window (2–4 days instead of same/next day); inconsistent window (sometimes too early, shop not yet open, **no way to edit delivery time**); high shipping cost to provinces (Ardabil: 20–30 \[thousand toman\] monthly, via ماهکس); **delivery requires profile owner to show national ID card** — breaks for partner-run shops (one shop bought 200M from a competitor because the owner was away); delivery-code SMS sometimes not received.  
- *قیمت سفارشی (custom price):* users don't understand what it means — submit their own suggested price? wait for a call? get notified when in stock? Requests get no follow-up call or are slow; too slow for urgent buys in a volatile market; "why are most prices custom?"  
- *UX:* site slowness, **slow product modal load**, each step loads slowly; wallet payment: competitors let you pay only the shortfall when wallet balance is insufficient, DKB requires topping up the full amount.  
- *Credit:* need to recharge credit; credit expired (since Khordad) and was not reactivated; one business buys via 3 accounts.

**Personas / segments.** Mobile/IT retail shop owners (B2R), price-driven, multi-sourcing daily; some buy offline only (from a wholesaler's suggested basket) and only glance at the site; some single-unit buyers prefer DK main for discount codes; credit-dependent buyers; partner-owned shops (shared profile).

**Design-relevant issues by page/flow.**

- *Home/PLP:* PLP is a price-monitoring surface → price must be scannable, current, with stock status and delivery promise visible per item. Consider price-change cues, "last updated", and stock signals.  
- *PDP / variant selection:* color-level stock and price must be accurate before selection; large per-color price jumps need explanation or visibility up front. Warranty name must be explicit.  
- *قیمت سفارشی:* needs clear label, explanation of what happens next, expected response time, and status tracking — or rethink.  
- *Bundles (سبدی):* make bundle-only availability explicit on PLP; users want single SKUs.  
- *Cart/checkout:* delivery window choice must be reliable and editable after ordering; shipping cost to provinces visible early.  
- *Payment/wallet:* allow paying the remainder when wallet balance is short (split payment).  
- *Credit:* status, expiry, and how to recharge/renew must be visible.  
- *Delivery handover:* alternatives to "profile owner \+ national ID" (delivery code to any shop staff, authorized recipients).  
- *Performance:* modal and step load times are a direct abandonment cause.  
- *Notifications:* back-in-stock notification; reliable delivery-code SMS.

**Recommendations from the report.** The file contains findings per ring; no separate recommendations section appeared in the text returned (the document may end at the barriers section). Implicit: build trust at PLP to move users from "checking" to "buying"; investigate city-level delivery SLA and sales-rep price mismatch.

**Quotes (anonymized).**

- P1: «برای مقایسه اومده بودم که قیمتاتون رو چک کنم»  
- P2: «گوشی میخواستم بخرم موجود هم بود ولی تو انتخاب رنگ میگفت موجود نیست»  
- P3: «قیمت سفارشی رو هم اصلا نمیفهمم یعنی چی؟ مثلا رو سایت موجود بشه بهم میگه؟»

---

### 2\. Full Report \- B2E Research ("شناخت مشتریان سازمانی")

| Field | Value |
| :---- | :---- |
| File ID | 1r94aW\_UqLmyvprIC-FA6\_LblEj5gg2I8 |
| Report date | آذر ۱۴۰۴ (≈ Nov–Dec 2025); Drive modified 2026-09 |
| Platform | **B2E** (legal-entity / organizational procurement) |
| Author | DKB UX Researcher |

**Goal.** Understand real purchasing behavior, needs and processes of B2E legal-entity customers to design a simpler, faster purchase experience that fits organizational reality. Findings feed directly into **phase 2 of the B2E platform**.

**Method & sample.**

- In-depth, semi-structured, **in-person interviews at the participants' workplaces**; n \= **10** (saturation reached).  
- All had made legal (حقوقی) purchases on Digikala; **all but two had previously used DKB, then switched back to Digikala main** and buy there now.  
- Selection: legal purchases on DK; varied industries; varied sizes.  
- Segments (company names removed): insurance (1400+ staff), office-consumables supplier (5–10), education/tutoring (500+), publishing/children's museum (30–40), pharma distribution (100+), laboratory (200+), auto-parts manufacturing (12), health-tech app (40), telecom infrastructure (600+), banking-infrastructure services (100+).  
- Roles: purchasing/procurement officers, administrative/executive managers, CEOs. City: Tehran (implied).

**Organizational purchase process (mental model).**

- *Goods types:* (a) capital goods/equipment — electronics (tablet, monitor, mobile), office appliances (heater, AC), computer parts; occasional, high value. (b) high-use consumables — food (tea, sugar, water), hygiene (tissues, detergents), office supplies (paper, stationery); routine, high volume.  
- *Suppliers:* factories/distributors for high-volume consumables (lower price \+ official invoice); Digikala for varied, smaller quantities, hard-to-find items, discounted/شگفت‌انگیز items, urgent buys.  
- *Large orgs:* need declared (unit request or stock at \~2 weeks left) → collect **پیش‌فاکتور** (proforma) from several vendors (formal result of «استعلام قیمت»; 2–3 sources mandatory for large amounts; sometimes only the trusted vendor) → **multi-level internal approval** (audit, finance, deputy) — can take days → finance pays. **Payment may happen only one day a week** (e.g. Sundays) → a Monday approval pays next week.  
- *Small/medium orgs:* buyer \= purchasing person (sometimes office staff), internal manager, or CEO; paid from **تنخواه** (petty cash) or a company card; usually no proforma; fast.  
- *Payment methods:* petty cash/company card for small daily buys; **credit (settlement in days or months) for a large share of org purchases**; cheques.

**Key findings.** Digikala (main) strengths:

- **Official invoice (فاکتور رسمی) is the \#1 and most repeated reason** to buy from DK — for tax reporting, cost transparency, audit. Orgs accept small price premiums for it.  
- Huge assortment — DK is the first place they search.  
- Brand trust and payment security; DK's name speeds internal approvals (managers trust the brand).  
- Convenience/time-saving vs. going to the market.

Digikala (main) weaknesses:

- **Logistics \= biggest trust breaker:** one customer said **90% of orders in the last 3–4 months were 2–4 days late**; some items (e.g. a lamp) promised a week out; deliveries outside the chosen window (problem for orgs with fixed hours and a designated receiver); poor packaging (food, fragile); couriers refusing to carry heavy items (fridge) upstairs; **no direct contact with the courier**.  
- **Per-order quantity limits** block bulk buying ("I need 50, you allow 5"). Bulk via support is manual and slow.  
- **No tiered/volume pricing**; DK seen as retail-priced and often more expensive than market/factory for bulk (one lab: "about a third more expensive"; buying without invoice and paying the tax penalty is still cheaper).  
- **SHEBA (شبا) payment for large amounts is slow** — confirmation up to **72 hours** delays processing.  
- **No credit/cheque payment** on DK main (cash only), while market suppliers give 10-day, 1-month, 2-month terms.  
- **Invoice problems:** invoice not systematically corrected after returns/partial cancellation → accounting mismatches; **VAT inclusion unclear before purchase** (only visible on final invoice after delivery) → hard to compare quotes.  
- Refunds to org bank cards without a SHEBA number are long and painful.  
- Quality: used/defective items reported (motherboard, CPU, food).

DKB (old B2E platform) per users:

- **No significant advantage over buying حقوقی on DK main**; only an account manager for follow-up and access to purchase credit were mentioned.  
- **Severe assortment gap** — the biggest reason for churn (may be fixed now; churned users are unaware).  
- **Manual flow:** had to contact the account manager and give **DKP codes** → loss of autonomy and speed.  
- Some prices higher than DK main.  
- **Delivery only with national ID card** — awkward when the panel is in the CEO's name; caused at least one org to stop.  
- Immature, "weird", unfriendly UX on the old B2E platform.  
- Result: most orgs use a **personal account on DK main and tick "خرید حقوقی"**, which lacks org features like easy bulk buying.

**User needs / mental models.**

- Procurement is document-driven: پیش‌فاکتور → approvals → payment → فاکتور رسمی. The platform must produce documents at each step.  
- Time lag between "decide" and "pay" (approval chains, weekly payment day) → prices/carts must survive days.  
- Volume \= discount; quantity should not be capped.  
- Receiving must not depend on one named person.

**Design-relevant issues by page/flow.**

- *Search/PLP:* assortment parity with DK main is table stakes; first search goes to DK.  
- *PDP/Cart:* show **VAT-inclusive vs. exclusive** price clearly before purchase; tiered/volume pricing display; no low quantity caps; bulk quantity input.  
- *Quote/proforma:* self-serve **پیش‌فاکتور** download from cart, with validity date, shareable for approval.  
- *Approval:* multi-level approval workflow or at least a shareable cart/quote link.  
- *Payment:* credit terms, cheque, fast bank transfer (avoid 72h SHEBA lag); pay-later aligned with a weekly payment day.  
- *Invoice:* official invoice always available; automatic corrected invoice after returns/partial cancellation.  
- *Delivery:* reliable time windows within business hours, courier contact, designated/alternative receivers (not only the panel owner's national ID), heavy-item handling.  
- *Refunds:* support refunds to org accounts without SHEBA friction.  
- *Account:* org account not tied to the CEO's personal identity.  
- *Account manager:* keep as a support layer but don't make buying depend on it (no DKP-code-by-phone flow).

**Recommendations from the report.** No explicit recommendation list; the implied phase-2 direction is: match DK assortment, self-serve bulk buying with volume pricing, credit/cheque payment, clean invoicing (VAT visibility, corrections), reliable logistics, and a clearly better UX than DK main \+ "خرید حقوقی".

**Quotes (anonymized; roles only).**

- CEO, education org: «در مجموع برگ برنده دیجی‌کالا صرفا سیستم شفاف مالیاتیشه.»  
- Purchasing officer: «بزرگترین مشکلم اینه که من از یه کالایی مثلا ۵۰ تا می‌خوام شما مثلا ۵ تا اجازه میدی من بخرم.»  
- Telecom org: «دیجی‌کالا نقدیه دیگه… نمی‌تونیم خریدای سنگینمونو با دیجی‌کالا انجام بدیم.»

---

### 3\. Full Report \- Business Check-in: Impact of Recent Events

| Field | Value |
| :---- | :---- |
| File ID | 1l9PGNNHT5sb-U7wpZ1Dz9\_D5slbBTWlf |
| Report title (in doc) | «گزارش کامل بررسی شرایط فروشگاه‌های موبایل و لوازم جانبی در جریان جنگ ایران و اسرائیل» |
| Report date | تیر ۱۴۰۴ (interviews 11–12 Tir ≈ 2–3 July 2025); Drive modified 2025-10 |
| Platform | **B2R** (mobile & accessories shops) |
| Author | Questions & report: author (DKB UX Researcher); interviews run by the call-center team; collaboration of Product, Telesales, Call Center |

**Goal.** Understand shop conditions during and after the June 2025 war: who stayed open, sales and customer behavior, post-war market perception, in-demand goods, sourcing approaches, crisis preparedness — to inform services, communication, and platform readiness for emergencies.

**Method & sample.**

- Phone interviews by the call center.  
- Target: **100 active, loyal DKB shops** that bought **at least once every two weeks** from early Esfand 1403 to 23 Khordad (doc says 1403; almost certainly 1404, i.e. pre-war).  
- Calls: **100 total; 64 successful (64%); 53 interviewed (83% of successful)**.  
- Analysis: \~**300 sticky notes** → Affinity Diagram (FigJam) → **6 thematic insights** with frequencies and quotes.  
- Geography: war focused on Tehran, Karaj, Tabriz, Kermanshah; exact shop locations not available.

**Key findings (verbatim numbers).**

- Activity during war: **50% kept operating, 40% stopped** (as stated in the body; the conclusion says **60%** kept shops open — 32 of 53 ≈ 60%; internal inconsistency).  
- Of the **32** open shops: **\~72% had no meaningful sales; \~28%** reported stable or growing sales. Shops with prior online/remote sales infrastructure performed better ("we were online"; VPN sales were great).  
- Post-war market: **54%** see improvement (from "great" to "better but nothing special"); **\~40%** still stagnant/weak; **\~6%** neutral. Recovery is uneven and fragile.  
- Demand: **31 (58%)** said no specific demand/no change; **26 (42%)** named items. Named: Samsung A-series (A06 mentioned most — 4; A16, A36, A05, A56, A26 …), Xiaomi Note 14 / Note 14 Pro, basic feature phones (Nokia, X730, X930 — for calls and signal), iPhone 16 / 16 Pro Max (3/1), power banks (7), rechargeable lamps (1), VPN, low-end phones. Customers sought repair over purchase; purchasing power collapsed.  
- Sourcing: mixed model — traditional market, alternative platforms, importers. Competitors repeatedly named: موبایل ۱۴۰, همراه‌تل, دیجی‌کالا, DKB. (A chart of top suppliers is referenced but its data was not in the text.)  
- Reasons for using competitors over DKB: **better price** (e.g. موبایل ۱۴۰), **stock & assortment** ("you have few goods", "your stock isn't complete" — some buy from DK main instead), **faster delivery** (will switch supplier for speed), **credit purchase** — **after the war DKB stopped cheque/credit purchasing**; users reported returned cheques ("you bounced my cheque on day 4 of the war"), credit blocked; they moved to suppliers with long settlement terms.  
- Crisis preparedness: **more than half have no plan**; a few would move to online/phone/remote sales; a small group would close.  
- Key framing: "In the customer's mind DKB is one of several channels, not the only one — it must fight to be first choice."

**User needs / mental models.** Survival mode; extreme price sensitivity; demand for low-end/essential devices; credit continuity is a loyalty factor; a supplier's behavior in crisis (bounced cheques, blocked credit) is remembered.

**Personas / segments.** "Active during crisis" vs. "stopped"; "online-capable shops" (resilient) vs. "walk-in only" (vulnerable); "credit/cheque buyers" hurt by policy change.

**Design-relevant issues by page/flow.**

- *Credit/payment:* clear, proactive communication of credit status changes (blocked, suspended, cheque returned) with reasons and next steps; avoid silent blocking.  
- *Home/merchandising:* surface essential/low-end devices, power banks, feature phones during crises; demand-shift awareness.  
- *Stock/assortment:* completeness of popular SKUs matters more than breadth during volatility.  
- *Delivery:* speed is a switching factor.  
- *Opportunity:* tools that help shops sell remotely (e.g. shareable product lists/prices) could add resilience (inferred, not stated as a recommendation).  
- *Crisis mode:* platform readiness for emergencies (status messaging, policy banners).

**Recommendations from the report.** Conclusions only: open ≠ stable; demand exists but scattered; sourcing diversified; competitors active and visible; low crisis preparedness. Stated purpose: design support services and prepare the platform for emergencies.

**Quotes (anonymized).**

- P1: «جایگزین میکنیم به شرکتی که سریع بهمون برسونه»  
- P2: «موبایل 140 خرید میکنم قیمت‌هاش بهتره تا شما»  
- P3: «روز 4 جنگ چکمو برگشت زدید کارتون درست نبود»

---

### 4\. Full Report \- Gold Research ("گزارش کامل نتایج نهایی ریسرچ فاز ۱ ورتیکال طلا")

| Field | Value |
| :---- | :---- |
| File ID | 1oI4UV2hi3ZhPzb9ZGhi-o41aVu\_hG4Ln |
| Report date | اردیبهشت ۱۴۰۴ (≈ Apr–May 2025); version 1.0.0; Drive modified 2025-07 |
| Platform | **Gold** (separate vertical) |
| Author | DKB UX Researcher |

**Goal.** Deep understanding of current gold-market processes, the actors, and their challenges/pain points (phase 1 discovery).

**Method & sample.** **30 in-person field interviews** in different districts of **Tehran**; segments: **ویترین‌دار** (shop/showcase owners) and **آب‌شده فروش** (melted-gold suppliers). Analysis: coding \+ thematic analysis.

**Actors (domain glossary).**

- **ویترین‌دار** — gold shop owner.  
- **بنکدار زیور** — jewelry wholesaler; intermediary between workshop/factory and shops.  
- **کیفی** — wholesaler's visitor/peddler; carries jewelry in a bag to shops; buys from shops/wholesalers or takes on credit; takes \~**2%** margin (buys at 5% profit, sells at 7%); shops settle with them over longer periods.  
- **آب‌شده فروش** — supplier of melted gold (آب‌شده) to shops, wholesalers, workshops.  
- Units/terms: **مظنه** (quote, priced per **مثقال**), **خط** \= 1,000 toman, **حواله** (transfer order), **انگ** (assay stamp), **قیمت فردایی** (tomorrow price), **حساب طلایی** (gold-denominated account).

**Themes & findings.**

1. **Trust** — built over years, reputation, introductions by market elders; trust → **اعتبار** (credit): deals on word only, no signature/formal record.  
2. **Supply** — trading mostly by **phone or WhatsApp**. In volatile markets, melted gold is bought at the same moment jewelry is sold; no money moves at that moment; shop pays the next day. Jewelry bought from wholesalers (in person, settled in gold) or کیفی‌ها (settled via حواله to wholesaler or in melted gold over time, e.g. 5 g weekly). Jewelry purchase frequency varies; chains restocked often; new models \~monthly.  
   - Melted gold: malls usually have 1–2 آب‌شده فروش on site (low transport risk, availability matters). Each shop works with **1–4** suppliers, mainly one, keeping a **gold account** (buys 10 g, 5 g, 20 g…; at 100–200 g takes delivery or transfers via حواله). **Minimum physical delivery: 20 g** (smallest amount that can be stamped/انگ).  
   - Purchase: call supplier → get live مظنه → agree → pay by card-to-card/SHEBA now, or lock at **فردایی** price and pay tomorrow; later payment \= that day's quote unless trust allows otherwise.  
   - **Some suppliers have their own apps**: shops upload their licence (جواز), check prices and buy in-app.  
   - In extreme volatility suppliers may stop selling; if all stop, shops stop too.  
3. **Delivery** — usually the shop owner collects personally; trusted couriers only for special clients; risk lower in the Grand Bazaar and malls (police), high when carrying gold to wholesalers; حواله between suppliers and wholesalers reduces physical movement.  
4. **Price** — آب‌شده margin **10–50 خط** over مظنه (some report **100–200 خط**). Price sources: private Telegram channels by suppliers, "پله آهنی" and "آب‌شده نقدی پایتخت" channels, tala.ir (most trusted), TGJU, union site, supplier apps. All agree market vs. site/channel prices differ.  
   - Payment types: **instant** (quote → transfer → gold credited to account) and **فردایی** (two quotes daily: live and tomorrow; tomorrow \> today; lets shops buy without cash now).  
   - Selling back: shops sell melted gold (often from used gold bought from customers) or withdraw part of their gold balance as cash; some trade volatility.  
5. **Settlement** — timeliness is critical; **even a 24-hour delay can cause a loss** (money is immediately converted to gold). With آب‌شده فروش: bank transfer (ساتنا), card-to-card, or a supplier-provided **POS in the shop** (customer pays directly into supplier's account → shop calls to credit gold). With wholesaler: in gold. With کیفی: gold or حواله. All but wholesalers can offer flexible settlement.

**Pain points.**

- Security: **fake transfer receipts** (workaround: check account balance before handing over gold); **theft** incl. swapping with fakes; **impure/wrong karat gold** (workaround: trusted labs).  
- **Price volatility**: fear of falling behind; convert sales to gold instantly or end of day; live price changes cause disputes with end customers mid-sale.  
- **Transport risk**: robbery, injuries/deaths reported; few trusted couriers; post not trusted; **gold is uninsured**.  
- Payment/settlement: verbal deals can be reneged; 24h delays cause loss; **tax evasion via splitting payments across multiple personal accounts**; **stolen money deposited** → police cyber unit freezes accounts months later (workaround: record buyer's national ID).  
- Supply: suppliers stop selling in volatility; کیفی‌ها have little variety; defective melted gold returned to supplier.

**Personas / segments.** ویترین‌دار (mall vs. street shop — different risk profiles), آب‌شده فروش, بنکدار, کیفی.

**Design-relevant issues by flow (for a Gold product).**

- *Price display:* live مظنه per مثقال plus **فردایی** price; timestamp and source; lock-price mechanism with countdown.  
- *Account:* gold-denominated balance (grams), partial withdrawal to cash, convert-sell flow.  
- *Order:* small increments (5–20 g) credited to a gold account; physical delivery threshold **20 g**.  
- *Settlement:* instant confirmation (no fake-receipt risk), deferred payment (فردایی) as first-class option, settlement status visibility.  
- *Trust/KYC:* licence (جواز) upload onboarding, verified identities, digital record replacing verbal deals.  
- *Delivery:* insured, trusted pickup/delivery or حواله-style transfer to wholesalers to avoid physical carrying.  
- *Communication channels:* users live in WhatsApp/Telegram — consider price push/alerts.

**Recommendations from the report.** None explicit (discovery phase); the pain points imply opportunities around trusted pricing, digital gold accounts, safe settlement, insured logistics, and formal records.

**Quotes.** The report contains no direct participant quotes (it is written in summary form in colloquial Persian). Representative paraphrase (from report text): «تاخیر در پرداخت حتی به اندازه 24 ساعت میتونه باعث ضرر بشه.»

---

### 5\. Event \- Tabriz ("گزارش ریسرچ و بینش‌های میدانی از تجربه مشتریان در ایونت دیجی‌کالا بیزینس تبریز")

| Field | Value |
| :---- | :---- |
| File ID | 1kOsJTxTyY9YMmaGsd\_yrE0FMUQSwuGVm |
| Report date | مهر ۱۴۰۴ (≈ Sep–Oct 2025); Drive modified 2025-11 |
| Platform | **B2R** (mobile & IT wholesalers/retailers) |
| Author | DKB UX Researcher |

**Goal.** Observe how B2B customers interact with the DKB brand and platform in a live, natural setting; what builds trust, hesitation, or satisfaction; insights to improve CX, platform trust, and future events.

**Method & sample.** Qualitative field observation (non-intrusive) \+ short informal conversations during a DKB event in **Tabriz**. \~**94** B2B customers (wholesalers and retailers, mobile & IT) attended; short conversations with \~**20**. Notes taken live; no audio (noise/music).

**Key findings.**

- Entry: team showed discount codes and a **QR** to enter the platform. Most opened the **home page** and checked prices through the **کروسل سورپرایز** (surprise carousel); others went to the **PLP** and scrolled continuously.  
- After a few minutes several put their phones down in frustration: **prices still high even with discount** (example: DKB 17,150 vs. a participant's own retail price to end customers 17,050).  
- **Multi-sourcing in real time**: 2–3 people checked competitors' **WhatsApp price lists** simultaneously while on DKB (one red/black design, one orange).  
- **Discount-code errors:** when an item in the cart went out of stock at that moment, applying a code showed **«کد تخفیف نامعتبر است»** (misleading — real cause was stock). Others typed the code but **did not tap the «+» button** to apply it; they reported "the code doesn't work". This was one of the **most frequent questions** at the event.  
- **Mobile behavior:** in the purchase flow users **tapped the product image in the cart to re-check specs — no action**, had to go back to find specs; **slow page loads**, waiting for the **modal** to open with visible frustration. Most interactions stalled at browsing and did not reach purchase completion.  
- **Price is the \#1 factor**; with a discount code purchase is more likely. **Fast delivery is \#2**; most were **satisfied with DKB's delivery speed** (one dropped a competitor after one late delivery).  
- **Settlement:** several asked for longer payment terms; **4–5 days** would be a competitive advantage (others give at least 4–5 days).  
- **Cheques:** **7 people preferred cash** (cheque risk, limited cheque leaves, sending physical cheques takes time). Cheque users proposed a **چک ضمانت** (guarantee cheque) → credit line model (as one competitor does), so daily buyers don't issue a cheque per purchase.  
- **Human relationship:** offline sales reps frequently named; customers feel easier working with them — habit, special offers via **WhatsApp**, longer settlement, cheque purchase → little motivation to use the platform. But with discount codes, lower prices, cheque purchase (and guarantee-cheque credit) they would likely use the platform; they don't find online buying hard. **Online chat** with a sales expert was suggested.

**Design-relevant issues by page/flow.**

- *Home:* surprise carousel is the main price-discovery entry point from QR.  
- *PLP:* long scrolling; price comparison against WhatsApp lists.  
- *Cart:* product image/title should link to PDP or open a spec sheet; stock change inside cart must be shown explicitly before or when applying codes.  
- *Discount code field:* explicit "اعمال" button label/state, auto-apply or apply on enter, success/failure feedback with the real reason (out of stock vs. invalid code), visible savings amount.  
- *Performance:* modal load and page load speed on mobile.  
- *Payment/credit:* settlement terms 4–5 days; guarantee-cheque-based credit line; cheque option.  
- *Support:* in-app chat with sales/support; personalized messages from sales reps.  
- *Promotion communication:* SMS and other channels; clear usage instructions, validity time, actual saving.

**Recommendations from the report (verbatim intent).**

1. Improve discount application: visual cue / short guide on how to activate a code; inventory handling so carted items don't suddenly become unavailable when a code is applied.  
2. Improve promotion communication: timely, clear notice via SMS and other channels; clear messages on how to use, validity, and real saving; make discounts feel easy to access.  
3. More settlement flexibility: evaluate 4–5 day terms for active customers; design a guarantee-cheque credit model.  
4. Add a human layer to the platform: online chat with sales experts / live support; personalized messages from sales reps for key customers.  
5. Mobile: redesign the Purchase flow; optimize page load speed.

**Quotes (anonymized).**

- P1: «قیمتاتون حتی با این تخفیف هم بالاست.»  
- P2: «اگه تسویه طولانی‌تر باشه، راحت‌تر خرید می‌کنیم. الان اکثرا حداقل چهار، پنج روز مهلت می‌دن.»  
- P3: «ارسال خیلی مهمه برام. حالا ارسال شما خوبه، زود می‌رسه…»

---

### 6\. Cross-report themes for design

- **Price is a live, comparative signal, not a static label.** B2R users check 2–3+ sources daily (WhatsApp lists, competitor sites, DK main) and a 150–200K toman gap kills the sale. Design PLP/PDP for fast price scanning, freshness ("updated at"), and honest total cost (price \+ shipping \+ VAT). Consider price alerts / watchlists, since many visits are monitoring, not buying.  
- **The PLP is a market-watch tool.** Optimize for monitoring (compact rows, price \+ stock \+ delivery promise per item, quick filters by brand/model/storage/color) and give a short path from "checking" to "buying" (quick add, saved lists).  
- **Stock truthfulness at every level.** Color/variant availability shown but not orderable, bundle-only (سبدی) stock, items going out of stock in cart, and post-payment cancellations are the most trust-destroying issues across PLP, Tabriz and Check-in reports. Show variant-level stock and price before selection; flag bundle-only; warn in cart before checkout; back-in-stock notifications.  
- **Delivery promise must be accurate and controllable.** Speed is the \#2 decision factor everywhere (B2R and B2E). Show realistic, city-specific ETAs; allow editing the delivery window; provide courier contact; reliable delivery-code SMS.  
- **Receiving is a team activity, not one person.** The "profile owner \+ national ID at the door" rule breaks partner-run shops (B2R) and CEO-registered org accounts (B2E). Design for authorized recipients / delivery codes any staff can use.  
- **Credit and settlement terms are a core product feature.** B2R wants 4–5 day settlement, guarantee-cheque credit lines, reliable credit status (credit blocks and bounced cheques after the war were remembered as betrayal). B2E needs credit/cheque terms and pay-later aligned with weekly payment days. Credit state (available, blocked, expired, how to renew) needs a clear, always-visible home.  
- **Payment friction.** Wallet should allow paying the remainder; SHEBA confirmation up to 72h is too slow for large orders; refunds to org accounts must be easy.  
- **Documents are the B2E product.** پیش‌فاکتور (self-serve, shareable, dated), official invoice (فاکتور رسمی), VAT visibility before purchase, automatic corrected invoices after returns. Official invoice is the main reason orgs choose DK at all.  
- **Bulk and volume.** B2E needs no low quantity caps, a bulk-quantity input, and tiered/volume pricing displayed on PDP/cart. Manual "call your account manager with DKP codes" flows must become self-serve.  
- **Unclear concepts must be renamed or explained.** قیمت سفارشی is not understood (what to do, what happens next, how long). Discount-code «+» button not recognized as "apply". Use explicit labels, inline explanations, and status tracking.  
- **Error messages must state the real cause.** "کد تخفیف نامعتبر است" shown when the real cause was stock-out.  
- **Performance is UX.** Slow modal and step loads are cited in both PLP and Tabriz reports as direct abandonment causes, on mobile.  
- **Cart needs product context.** Users want to tap the item in the cart to re-check specs.  
- **Human layer still matters.** Sales reps (WhatsApp offers, flexible terms) beat the platform for many B2R users; account managers were the only B2E perk mentioned. Add in-app chat, rep-sent personalized offers/codes, and make platform terms at least equal to rep terms so the platform doesn't lose to the human channel.  
- **Promotions and discount codes drive action** (Tabriz, PLP: DK main codes make single-unit buys cheaper). Discoverability, clear validity and visible saving matter.  
- **Warranty clarity** (brand-trusted warranty names) is a decision criterion on PDP/PLP for mobile.  
- **Assortment parity with DK main** is a recurring comparison point (B2R and B2E); users compare DKB directly against Digikala.  
- **Crisis readiness.** Status/policy banners, transparent credit-policy changes, surfacing essential low-end products, and remote-selling support for shops.  
- **Gold vertical** needs a fundamentally different model: live مظنه \+ فردایی price, gold-denominated accounts, instant verified settlement, licence-based onboarding, insured logistics/حواله — trust and speed of settlement over browsing.

### 7\. Conflicts with known facts

Known facts checked: B2R mobile \= 77% of sales; activation 9.64%; 97% of customers are natural persons; orders under 50M toman need a business licence; delivery same day Tehran/Alborz, next day provinces.

- **Delivery SLA — conflict (experienced vs. promised).** PLP report: deliveries took **2–4 days instead of same-day/next-day**; a Kerman user got 2-day delivery; a user said "at registration you said tomorrow, now it's 2 days like everywhere"; a Tehran-province (Pakdasht) user reported \~3 hours vs. an expected 1 hour; one Tabriz order was cancelled after 10 days. B2E report: 90% of one org's DK orders 2–4 days late (DK main, not DKB). Counterpoint: Tabriz event participants were mostly **satisfied** with DKB delivery speed. So the policy may be correct, but delivery performance is inconsistent, especially in provinces.  
- **97% natural persons — tension, not contradiction.** Reports show that many "natural-person" profiles actually represent businesses run by partners or companies (PLP: shared shop profile in one partner's name; B2E: panel in the CEO's name; orgs buying via personal DK accounts with "خرید حقوقی" tick; one B2R customer buys via 3 accounts). The 97% figure likely hides multi-user businesses — account and delivery design should not assume one person \= one buyer.  
- **Credit availability.** Check-in report (July 2025\) states DKB **stopped cheque and credit purchasing after the war** and returned cheques; PLP report (autumn 2025\) has a user whose credit expired in Khordad and was never reactivated. If current docs assume credit is broadly available, confirm current policy.  
- **Business licence under 50M toman** — not mentioned in any report; no conflict. (Related: competitor offers free shipping on orders above 30M.)  
- **Mobile 77% of sales** — consistent: Tabriz observations were all on phones; no contradicting data.  
- **Activation 9.64%** — not mentioned; no conflict. The PLP report's "52.31%" is call success rate, not activation.  
- **Internal inconsistency (Check-in report):** body says 50% stayed open / 40% stopped; conclusion says 60% stayed open (32 of 53 ≈ 60%). Also the sample window says "Esfand 1403 to 23 Khordad 1403", likely a typo for 1404\.

### Reading notes

- All 5 files were read in full via Drive `read_file_content`.  
- Charts/images embedded in the Check-in report (top suppliers, sales breakdown, crisis-plan counts) did not come through as text; only figures stated in prose are included.  
- The PLP report text ends after the barriers section; no Success Factors section or explicit recommendation list was present in the returned text.  
- Personal data removed: participant names, staff/sales-rep names, a wholesaler name in a quote, company names of B2E participants (replaced by industry \+ size), and an email address on the Check-in cover.

---

## B — Heuristic Evaluation & Usability Issue Inventory (B2R / "CE platform")

> Source pack: Google Drive, read-only. Compiled 2026-10-19 for the DKB product & design knowledge base. Platform in scope: **B2R** (then called the "CE platform", b2b.digikala.com): the B2B electronics store for retailers and shops. B2E and Enterprise Portals were **not** evaluated in these files. No personal data is included. Evaluators and owners appear only by role.

| Source file | Date | What it contributes |
| :---- | :---- | :---- |
| Heuristic Evaluation Report.docx | v1.0, reviewed 2025-06-16, updated 2025-07-01 | Method, severity scale, about 55 issue write-ups by category. Every recommendation says "To be provided by design team". |
| Heuristic Evaluation Issue List.xlsx | 2025-08 | 40 scored issues: Severity × Frequency × Business Impact, a priority band, a data pointer, sometimes a recommendation |
| Platform Usability Issues Proposal.docx | 2025-08-30 | Picks 14 issues (Critical, High and Medium) for proposals. Re-prioritises some. |
| Heuristic Evaluation Issues – No1…No14.docx | 2025-08-20 → 2025-09-06, all v1.0 | One proposal per issue: description, funnel data, proposed solution, owner role, deliverables, acceptance criteria (AC) |
| Platform Usability issues .xlsx | 2026-01 | Real user comments in Persian (CSAT, PLP research, loyalty research, Tabriz event), each with a category. Used here to support the "check" flags. |

---

### 1\. Method

- **Framework:** Jakob Nielsen's 10 usability heuristics. This was an expert review with no users.  
- **Process:** (1) a kick-off session to agree goals, criteria and flows; (2) independent evaluation of the **live** platform, where each evaluator mapped issues to heuristics and gave a first severity; (3) a consensus meeting to validate wording, remove duplicates, agree severity (based on frequency, impact and persistence) and group issues by flow and heuristic.  
- **Evaluators:** 4\. Roles: UX researcher, lead product designer, product designer, product manager.  
- **Platform and devices:** b2b.digikala.com (B2R). Both **mobile-first and desktop** were reviewed.  
- **Flows in scope:** product purchase (search → add to cart → checkout → payment), order tracking (history, status, repeat orders), RFQ (submit and track), login and registration, profile management, credit and wallet management.  
- **Tools:** the live site, a FigJam evaluation board, screenshots and Figma flow diagrams.  
- **Severity scale (0–4):**  
  - 0 \= no issue.  
  - 1 \= cosmetic: fix if time allows.  
  - 2 \= minor: worth fixing.  
  - 3 \= major: confusion or slowdown, should be prioritised.  
  - 4 \= critical: blocks the task or causes major frustration, must fix now.  
- **Prioritisation score (added in the Aug 2025 sheet):** **Score \= Severity (1–4) × Frequency (1–3) × Business Impact (1–3)**, so the range is 1–36.  
  - Frequency: 1 \= rare or edge case, 2 \= common, 3 \= most users every time.  
  - Business impact: 1 \= no direct effect, 2 \= friction in key flows, 3 \= blocks critical business goals.  
  - Bands: **Critical 18–36 · High 10–17 · Medium 5–9 · Low/Ignore 1–4**.  
- **Planned next steps (from the report):** design recommendations per issue, a prioritisation workshop, design QA, optional follow-up usability testing, and tracking issues as tickets.  
- **Proposal stage (Aug–Sep 2025):** 14 issues got one-page proposals with funnel data and acceptance criteria. Ownership was split between Product Design (UX/UI) and Engineering (performance, search, logic). **No file records that any fix was implemented**, so every "status" below means "proposal written" at most.

**Source discrepancies to know about:**

- The sheet's overview says 42 issues, but it has 40 rows. Its severity counts (11 × S4 / 23 × S3 / 6 × S2) match the 40 rows.  
- The proposal summary re-banded some issues against the sheet:  
  - wallet back button: High → **Critical**  
  - product modal delay: Critical → **High**  
  - bulk counter: High → **Medium**  
- Some severities differ between the report and the sheet. The table uses the **sheet value (later)** and puts the report value in brackets.  
- Copy-paste defects in the proposal docs:  
  - No4's acceptance criteria are copied from No3.  
  - No10's body is a copy of No9, so it has **no real solution written**.  
  - No14 has No13's title, but its body is correctly about Persian search.  
  - No9 is labelled "PLP" but the issue is in checkout.

---

### 2\. Consolidated issue table

Columns:

- **Sev** \= 0–4 severity.  
- **Score / Band** \= the Aug 2025 priority score. A dash means the issue is in the report only and was never scored.  
- **Heuristic** abbreviations:  
  - VSS \= Visibility of system status  
  - MRW \= Match between system & real world  
  - UCF \= User control & freedom  
  - C\&S \= Consistency & standards  
  - EP \= Error prevention  
  - RR \= Recognition rather than recall  
  - FE \= Flexibility & efficiency  
  - AMD \= Aesthetic & minimalist design  
  - ERR \= Help users recognise/diagnose/recover from errors  
  - H\&D \= Help & documentation  
- **Status:** "Proposal NoX" means a written proposal (v1.0, Sep 2025). "Open" means only "to be provided by design team". No issue is marked as fixed in any source.

#### 2.1 Home

No issues were raised on the home page. It was not a flow in scope.

#### 2.2 Header / navigation (back button)

| ID | Page/flow | Issue | Heuristic | Sev | Score / Band | Proposed fix | Status |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| NAV-01 | Profile sections, RFQ | Back in a profile sub-section or an RFQ step goes to the profile root, not the previous step. The user has to start over. | UCF | 3 | – | (none stated). Implied: back should return to the previous step. | Open |
| NAV-02 | Product page, reached from the PLP | A search input appears at the top of the product page "to add another product". This breaks the user's mental model of what the page is for. | RR | 3 | 3 / Low | (none) | Open |
| *see* WAL-01, CRD-01 |  | Other back-button issues are listed under Wallet and Credit. |  |  |  |  |  |

#### 2.3 Search

| ID | Page/flow | Issue | Heuristic | Sev | Score / Band | Proposed fix | Status |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| SRC-01 | Search results | Related terms give inconsistent results. «اپل» returns Apple products, but «آیفون» returns mostly accessories (Lightning cables) instead of iPhones. | MRW, EP | 4 | 8 / Medium | Synonym mapping and term clustering. Rank primary products above accessories for brand or product queries. **AC:** accessories appear only when the user searches for them explicitly. | Proposal No11 (Eng) |
| SRC-02 | Search results | Specific queries (e.g. "iPhone") return unrelated products. | MRW | 4 | 8 / Medium | "Extract search behaviours which result in ERP" (sheet). Covered by the No11 approach. | Open |
| SRC-03 | Search page while typing | The page is mostly empty. Users can't tell "zero results" from "still loading". | VSS, RR | 3 \[rpt 4\] | 6 / Medium | Show a loading state and a zero-results state with suggestions (e.g. "No results found. Try different keywords."). Show recent searches, most-searched items, and newly added or restocked items, updating in real time. | Proposal No13 (Design \+ Eng) |
| SRC-04 | Search | Searching with the Persian product name often returns nothing, although the product exists under English keywords. **Data:** 842 empty Persian searches vs 554 empty English searches in 30 days. | MRW | 3 | 6 / Medium | Persian↔English keyword mapping and bilingual indexing. Suggest the English equivalent when a Persian search returns nothing. **AC:** a Persian name returns the same results as the English name. | Proposal No14 (Eng) |
| SRC-05 | Search bar | No autocomplete and no search history. Users retype every query. | RR | 3 | – | Partly covered by No13 (recent searches). | Open |
| SRC-06 | Search entry | Tapping the search bar opens a full-screen search page that removes the previous context. | VSS | 3 | 3 / Low | (none) | Open |
| SRC-07 | Search page | No placeholder text, suggestion or hint about what to do next. | H\&D | 3 | 3 / Low | (none). Partly covered by No13. | Open |

#### 2.4 PLP (listing, filters, product cards)

| ID | Page/flow | Issue | Heuristic | Sev | Score / Band | Proposed fix | Status |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| PLP-01 | Filters | The page shows filters as active, but the filter panel shows no selections. | C\&S, VSS | 4 | – (report only) | (none) | Open |
| PLP-02 | Filter chips | Users can't tell how to deselect an active chip or filter. | UCF | 3 | 3 / Low | (none) | Open |
| PLP-03 | Filters | Filter options include attributes of out-of-stock products, so applying them gives zero results. **Data pointer:** filter CTR. | EP | 3 | 3 / Low | (none) | Open |
| PLP-04 | Product cards | Discount badges are shown everywhere, even for tiny discounts. This is visual noise and hurts promotional credibility. | AMD | 3 | 9 / Medium | Show discount badges only for significant promotions (badge logic). Sheet note: "Redesign". | Proposal No8 (Eng) |
| PLP-05 | Product card (out of stock) | Out-of-stock items show «قیمت سفارشی» ("custom price") instead of «ناموجود». The label is unclear and doesn't say what happens on click. | MRW, RR | 3 | 3 / Low | (none). Implied: show the true state plus a clear next action (e.g. a price-request CTA). | Open |

#### 2.5 PDP / product (DKPC) modal

On B2R the product modal is **the only way to add an item to the basket**, so it works as the PDP and add-to-cart surface.

| ID | Page/flow | Issue | Heuristic | Sev | Score / Band | Proposed fix | Status |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| PDP-01 | Product modal open | The modal takes several seconds to appear after a tap, with no skeleton and unclear feedback. | VSS | 3 | 18 / **Critical** (proposal: High) | Engineering: cut the load time. Design: a skeleton UI for desktop and mobile with loading → success → error states. | Proposal No5 (Eng \+ Design) |
| PDP-02 | Modal, multiple units | Raising the quantity across variants crowds the UI. The button jumps, and the quantity selector sometimes detaches from its item, causing wrong selections. | RR, EP, VSS | 3 | 18 / **Critical** | (none) | Open |
| PDP-03 | Modal | Closing the modal, by accident or on purpose, loses all inputs. There is no confirmation and no way to restore them. | UCF | 4 | – | (none) | Open |
| PDP-04 | Modal | The modal can be submitted without required inputs (quantity, shipping option). | EP, RR | 4 | – | (none) | Open |
| PDP-05 | Modal | After an item is added, a confirmation button appears suddenly, breaking visual continuity. | VSS | 3 | – | (none) | Open |
| PDP-06 | Modal footer | The footer button switches between "Add to Cart" and "Go to Basket" depending on cart state, so users must remember which state they're in. | RR, VSS, EP | 3 | – | (none) | Open |
| PDP-07 | Modal toast | The toast after adding doesn't say what happened or what to do next. | VSS | 2 | – | (none) | Open |
| PDP-08 | Modal limits | No tooltip or help explains quantity or shipping limits when users hit them. | H\&D | 2 | – | (none) | Open |
| PDP-09 | Modal lazy-load | There is no loading indicator when more items load on scroll. | VSS | 2 | – | (none) | Open |
| PDP-10 | Modal elements | Buttons, filters and cards have no hover or selected states. | VSS | 2 | – | (none) | Open |
| PDP-11 | Product card \+ basket | Warranty information is missing at the points where users decide. **Data pointer:** CSAT, Farvardin–Ordibehesht. | RR | 4 | 4 / Low | (none) | Open |

#### 2.6 Cart / basket and quantity selector

| ID | Page/flow | Issue | Heuristic | Sev | Score / Band | Proposed fix | Status |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| CRT-01 | Cart → checkout | **Items in the cart become unavailable during checkout without warning.** They are removed silently or shown with vague warnings. There is no reservation window, timer or retry. Affects mobile and desktop. **Data pointer:** stock error %. | VSS, EP | 4 | **36 / Critical (highest)** | (none. Listed as "to be provided by design team") | Open |
| CRT-02 | Quantity counter | Users can't tell the maximum until they pass it. "+" shows 3, then snaps back to 2 with the error «حداکثر 2», which feels like a glitch. **Data:** of 169 users who hit a stock or quantity error, about 58% completed the purchase and about 42% dropped off. | EP | 3 | 18 / **Critical** | Show the maximum next to the stepper ("Max: 2 per order"). **Disable "+"** at the limit. Show inline messages ("You can add up to 2", "Only 2 left in stock"). | Proposal No2 (Eng owner, Design support; needs a feasibility check) |
| CRT-03 | Quantity counter | Each quantity change takes **about 5 s** with no feedback. Users average **about 21 add/remove actions**, so they double-tap and send duplicate requests. | VSS | 3 | 18 / **Critical** | Bring latency down to **≤1 s** (API and caching). Use optimistic UI and batching. Designer specifies the feedback micro-interactions. **AC:** about 5 s → ≤1 s. | Proposal No3 (Eng owner) |
| CRT-04 | Quantity counter | The \+/− stepper is inefficient for bulk and repeat B2B orders. **Data:** average items per order rose 2.7 → 3.5 → 3.9 (Farvardin → Ordibehesht → Khordad). | UCF, FE, MRW | 4 | 12 / High (proposal: Medium) | Reorder shortcuts from past purchases. (Direct numeric entry is implied but not specified.) | Proposal No7 (Design) |
| CRT-05 | Cart | No remove button. Users must tap "−" down to zero. | UCF | 4 | 8 / Medium | A "Remove item" control on each line (one tap removes all units) plus "Empty cart". The cart must update without a reload. | Proposal No12 (Design \+ Eng) |
| CRT-06 | Add-to-cart (logged out) | Logged-out users get a full-page redirect to login when they add to cart. **Data:** 2,670 logged-out users opened the add-to-cart modal; 491 (18.39%) entered login; 96 (3.6%) purchased. | UCF | 3 | 12 / High | Ask for login **at checkout**, not at add-to-cart. Use an inline login modal or bottom sheet. Keep the guest cart after login. | Proposal No6 (Design \+ Eng) |
| CRT-07 | Cart, remove toast | Removing an item shows a **red** toast, which reads as an error. | ERR | 3 | 3 / Low | (none). Implied: use neutral or success styling. | Open |
| CRT-08 | Basket / order composition | Quantity limits aren't communicated until the user tries to change the quantity. | UCF | 4 \[rpt 2\] | 4 / Low | See CRT-02. | Open |
| CRT-09 | Basket | When an item becomes unavailable, nothing tells the user what to do next. | UCF | 2 | 2 / Low | (none) | Open |
| CRT-10 | Cart item timeline | The order timeline in the cart ("In process", "Ready to ship") doesn't show finished steps or the next step. | MRW | 3 | – | (none) | Open |
| CRT-11 | Final confirmation button | The CTA label is vague and filled with promotional or warning text (e.g. "Congratulations, your gift will be added…"; product warning text inside the button). | AMD / MRW | 2 | 4 / Low | (none). Implied: the CTA states its action; notices go outside the button. | Open |

#### 2.7 Checkout / shipping

| ID | Page/flow | Issue | Heuristic | Sev | Score / Band | Proposed fix | Status |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| CHK-01 | Final step (payment page) | **The order summary and delivery address are not shown before paying.** **Data:** about 73% of users go back to the shipping page to review; 12% of those abandon. | VSS, RR | 4 | 24 / **Critical** | Redesign the payment page's information architecture: show the Order Summary (items, quantities, discounts, total) and the Delivery Address and Shipping Method **on the payment page**. Order: summary \+ delivery → payment method. | Proposal No1 (Design; V1 wireframes, V2 hi-fi) |
| CHK-02 | Address selection | The total payable amount isn't shown while choosing the address. Users must go to the next step to see it. | VSS | 3 | 9 / Medium | The proposal doc is a copy of No9, so **no fix is written down**. Implied: a persistent total or summary bar. | Proposal No10 (defective) |
| CHK-03 | "Delivery Info" page | The title says delivery, but the page also has payment options. Per-item prices are missing and the hierarchy is weak. | VSS | 2 \[rpt 3\] | 6 / Medium | (none) | Open |
| CHK-04 | Final CTA | The button doesn't say it leads to payment. | VSS | 2 \[rpt 3\] | 6 / Medium | (none) | Open |
| CHK-05 | After address confirmation | Nothing shows what the next step is. The CTA label doesn't name the next action. | MRW / AMD | 3 \[rpt 2\] | 3 / Low | (none). Implied: a stepper and action-named CTAs. | Open |
| CHK-06 | Checkout layout | Section tiles have inconsistent spacing and alignment and don't read as groups. | VSS, RR | 2 | 2 / Low | (none) | Open |

#### 2.8 Payment

| ID | Page/flow | Issue | Heuristic | Sev | Score / Band | Proposed fix | Status |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| PAY-01 | Payment method | Changing the payment method shows a loader, then **nothing visibly changes**. | VSS | 3 | 9 / Medium | Make the switch effectively instant (technical fix). **AC:** a clear, immediate confirmation of the switch. | Proposal No9 (Eng) |
| PAY-02 | Payment method | A default payment method is pre-selected even when it isn't valid for the order. | EP | 3 | 6 / Medium | (none) | Open |
| PAY-03 | Checkout entry | A "select a payment method" error appears **before the user has done anything**. | UCF | 2 | 4 / Low | (none) | Open |
| PAY-04 | Payment options | Selected options look **disabled**. | RR | 3 | 3 / Low | (none) | Open |
| PAY-05 | Card entry | International card numbers have no explanation or formatting, so users can't tell if they're accepted. | VSS | 3 | – | (none) | Open |
| PAY-06 | Card error | After choosing an invalid card there's no quick way back to fix it. | UCF | 3 | – | (none) | Open |
| PAY-07 | Payment amount | The amount shown is sometimes missing or doesn't match the order amount. | UCF | 3 | – | (none) | Open |

#### 2.9 Wallet

| ID | Page/flow | Issue | Heuristic | Sev | Score / Band | Proposed fix | Status |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| WAL-01 | Payment → wallet top-up → Back | Back sends the user to **Profile or Home**, not to Payment. **Data:** 65% of users who enter top-up from checkout leave through Back and never return. | UCF | 4 | 16 / High (proposal: **Critical**) | Back depends on where the user came from (from checkout → Payment; from profile → Profile). Add a "Continue Payment" CTA after top-up. **Run the whole top-up inside checkout.** Analytics events: `entered_topup_from_checkout`, `continue_payment_clicked`, `topup_success_checkout_resume`. | Proposal No4 (Design \+ Eng) |

#### 2.10 Credit

| ID | Page/flow | Issue | Heuristic | Sev | Score / Band | Proposed fix | Status |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| CRD-01 | Credit / financing instruction page | No back button. Users who arrive by deep link are stuck. | H\&D | 3 | 3 / Low | (none) | Open |

#### 2.11 Profile / orders

| ID | Page/flow | Issue | Heuristic | Sev | Score / Band | Proposed fix | Status |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| PRF-01 | Profile | No single transaction history. Wallet transactions, credit use, installments and cancelled orders are in separate places. | VSS, UCF | 4 | 4 / Low | (none) | Open |
| PRF-02 | Profile header | The "Summary" button does nothing. | AMD | 3 | 3 / Low | (none) | Open |
| PRF-03 | My Orders | Cancelled orders are not counted in the order status counts. | VSS | 3 | 6 / Medium | (none) | Open |

#### 2.12 Registration / KYC

No issue in these files is specific to KYC. The login-related issue is **CRT-06** (forced login redirect at add-to-cart). CSAT also reports that the login OTP SMS doesn't arrive («پیام کد ورود نمیاد»).

#### 2.13 Loyalty

No heuristic issues were raised. Loyalty research comments are in §2.15.

#### 2.14 RFQ

| ID | Page/flow | Issue | Heuristic | Sev | Score / Band | Proposed fix | Status |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| RFQ-01 | RFQ submission | Steps give no feedback and no progress indicator. Users don't know whether the request went through, what happens next, or how long to wait. | VSS | 4 | 16 / High | (none) | Open |
| *see* NAV-01 |  | RFQ back-button issue |  |  |  |  |  |

#### 2.15 General / visual / content, with user-voice evidence (Platform Usability issues .xlsx, Jan 2026\)

The sheet header says there were **1,640 platform-channel comments** in total (CSAT for abandoned carts on the CE platform). It lists **44 curated rows**. Their Priority, Action and Owner columns are empty, so none of these comments were triaged.

| Category (sheet) | Rows | Representative comments (Persian kept) | Links to |
| :---- | :---- | :---- | :---- |
| Functionality (bugs) | 17 | «سایت باگ داره اول میزنه موجود بعد موقع خرید میزنه ناموجود» · «وقتی کالا رو در سبد میذاریم ناموجود میشه» · «پیام کد ورود نمیاد» · «فاکتور نمیتونم ببینم… تعداد و قیمت باهم مغایرت داشته» · «کالاهایی داخل سایت و قیمت نمیده» · «سایت رو مثل سایت اصلی کنید» | CRT-01, PLP-05, PAY-07, CRT-06 |
| Performance | 13 | «سایت کند هست و تا فاکتور رو ببندیم بریم صفحه پرداخت طول میکشه» · «هر مرحله میخواد لود کنه انقدر طول داده که پشیمون شدم» · «بیزینس کنده معمولا ورود نمیکنم» | CRT-03, PDP-01, PAY-01 |
| Usability & interaction | 8 | «فضای کاربری سایت مناسب نیست و سخته سرچ کردن» · «هیچی سرچ نمیشه» · «فیلترهای بیشتر بذارید» · «قیمتهای سفارشی زود اعلام نمیشه» · discount code applied with a "+" button is confusing · the Black Friday banner doesn't show the code amount, and the code is too small on mobile | SRC-01..07, PLP-01..05 |
| Feature & value gaps | 4 | Paying a wallet shortfall straight through the bank gateway, instead of topping up first («اول باید کیف پول شارژ کنیم بعد خرید بزنیم»). Price-drop or promo notifications. Small-box (اسمال باکس) info. | WAL-01 (new: split payment) |
| Content & information | 1 | «اطلاعات و مشخصات کالا کامل تر قید شود» | PDP-11 |
| Uncategorised | 1 | Low product variety compared with the main Digikala site. Search finds nothing. | SRC |

Sources: CSAT (most rows), PLP research (2), loyalty research (2), Tabriz event (4).

Visual and content issues in the heuristic set also include PLP-04 (badge overuse), CRT-07 (red success toast), PAY-04 (selected looks disabled), CHK-06 (spacing), CRT-11 (promo text in the CTA) and PDP-10 (no hover or selected states).

---

### 3\. Counts

**Totals:**

- **55 distinct heuristic issues.** 40 are scored in the Aug-2025 sheet and 15 appear in the report only. The report's "confusing final-button text" and "no post-address indicator" were merged with their sheet equivalents (CRT-11, CHK-05).  
- **44 user-comment rows**, taken from 1,640 total comments.

#### By severity (0–4), using the sheet value where scored

| Severity | Count |
| :---- | :---- |
| 4 Critical | 14 |
| 3 Major | 31 |
| 2 Minor | 10 |
| 1 Cosmetic | 0 |
| **Total** | **55** |

#### By priority band (40 scored issues only)

| Band | Count | Issues |
| :---- | :---- | :---- |
| Critical (18–36) | 6 | CRT-01, CHK-01, CRT-02, CRT-03, PDP-02, PDP-01 |
| High (10–17) | 4 | WAL-01, RFQ-01, CRT-04, CRT-06 |
| Medium (5–9) | 12 | PLP-04, PAY-01, CHK-02, SRC-01, SRC-02, CRT-05, SRC-03, SRC-04, PAY-02, CHK-03, CHK-04, PRF-03 |
| Low (1–4) | 18 | the rest |

The proposal doc re-banded these as 4 Critical / 2 High / 8 Medium (14 total).

#### By area

| Area | \# | of which Sev 4 |
| :---- | :---- | :---- |
| Header / nav | 2 | 0 |
| Search | 7 | 2 |
| PLP | 5 | 1 |
| PDP / product modal | 11 | 3 |
| Cart / quantity | 11 | 4 |
| Checkout / shipping | 6 | 1 |
| Payment | 7 | 0 |
| Wallet | 1 | 1 |
| Credit | 1 | 0 |
| Profile / orders | 3 | 1 |
| RFQ | 1 | 1 |
| Home, Registration/KYC, Loyalty | 0 | – |
| **Total** | **55** | **14** |

Grouped by funnel stage, the **add-to-cart → checkout → payment** path (PDP modal, cart, checkout, payment, wallet) holds **36 of 55 issues and 9 of the 14 severity-4 issues**.

#### By heuristic violated (approximate; issues can have several tags)

| Heuristic | Approx. tags |
| :---- | :---- |
| Visibility of system status | \~22 |
| User control & freedom | \~14 |
| Recognition rather than recall | \~11 |
| Error prevention | \~9 |
| Match with real world | \~8 |
| Aesthetic & minimalist | \~4 |
| Help & documentation | 3 |
| Consistency & standards | 1 |
| Error recovery | 1 |
| Flexibility & efficiency | 1 |

---

### 4\. Top 10 highest-severity issues, in plain language

Ranked by the team's own priority score (Severity × Frequency × Impact).

1. **CRT-01, score 36: "In stock" becomes "out of stock" at checkout.** Items silently disappear from the cart during checkout with no explanation. This is the biggest trust breaker, and in 2026 CSAT users still describe it in exactly these terms.  
2. **CHK-01, score 24: You can't see what you're paying for on the payment page.** About 3 in 4 buyers go back to check their order, and 1 in 8 of those leave.  
3. **CRT-02, score 18: The quantity limit is a surprise.** "+" lets you go past the maximum, then snaps back with an error. 42% of buyers who hit a stock or quantity error drop off.  
4. **CRT-03, score 18: Each quantity tap takes about 5 seconds.** Buyers make about 21 taps per session, which adds up to minutes of waiting and duplicate taps.  
5. **PDP-02, score 18: The multi-unit picker in the product modal is messy.** Buttons jump and the quantity selector detaches from its item, so people pick the wrong thing.  
6. **PDP-01, score 18: The product modal is slow to open, with no skeleton.** It is the only way to add to cart, so every purchase waits on it.  
7. **WAL-01, score 16: Topping up the wallet from checkout throws you out of checkout.** Back goes to Profile, and 65% never come back to pay.  
8. **RFQ-01, score 16: Submitting an RFQ gives no feedback.** Users don't know whether it was sent or what happens next.  
9. **CRT-04, score 12: Bulk buying means tapping "+" over and over.** B2B baskets are growing (2.7 → 3.9 items per order) and there is no fast reorder or typed quantity.  
10. **CRT-06, score 12: Adding to cart while logged out forces a full login redirect.** Only 3.6% of those users end up buying.

**Severity-4 issues that were never scored but deserve the same attention:**

- PLP-01: filters look active when none are.  
- PDP-03: closing the modal loses all inputs.  
- PDP-04: the modal can be submitted without required fields.

---

### 5\. Recurring patterns and the design principles they imply

| Pattern seen | Issues | Principle for the DKB design system / agent |
| :---- | :---- | :---- |
| Silent waits (5 s steppers, slow modal, a payment-method loader with no visible result, lazy-load with no indicator, an empty search state) | CRT-03, PDP-01, PAY-01, PDP-09, SRC-03 | **Every async action gives feedback within about 100 ms.** Use optimistic UI, skeletons for any view that loads, and explicit loading / empty / error / success states for every data component. Target ≤1 s for cart mutations. |
| Correcting errors after the fact instead of preventing them (limit snap-back, an invalid default payment, a premature error, required inputs not enforced) | CRT-02, CRT-08, PAY-02, PAY-03, PDP-04 | **Prevent, don't correct.** Show limits before the user hits them, disable controls at their bounds, never pre-select an invalid option, validate on interaction (not on page load), and block submit until required fields are filled. |
| Availability that isn't honest | CRT-01, CRT-09, PLP-03, PLP-05 | **Stock state is truthful and consistent from PLP to payment.** Use plain labels («ناموجود» rather than «قیمت سفارشی»), explain any stock change and when it happened, and always give a next step (remove, notify me, request a price). |
| Navigation that loses context (back goes to the profile root, top-up leaves checkout, closing a modal wipes its state, login redirects) | NAV-01, WAL-01, CRD-01, PDP-03, CRT-06 | **Preserve context.** Back returns to where the user came from. Sub-tasks (top-up, login) open inline in a modal or sheet within the parent flow and return to it. Never discard user input without confirmation. Every page has a way back, including deep-link landings. |
| Decision information missing where the decision is made | CHK-01, CHK-02, CHK-03, PDP-11, PAY-07 | **Show what matters at the point of decision.** Keep a persistent order summary and total payable through checkout; show warranty on the card and in the basket; per-item prices must always match the payment amount. |
| B2C patterns applied to B2B volume | CRT-04, CRT-05, CRT-03 | **Design for bulk.** Numeric quantity input next to the stepper, reorder from history, one-tap remove, and empty cart. |
| State styling that reads wrong (a red success toast, selected looks disabled, missing hover/selected states, a footer CTA that changes meaning) | CRT-07, PAY-04, PDP-10, PDP-06 | **Semantic colour and state tokens.** Red is only for errors. Selected must look clearly stronger than default, and disabled must look clearly weaker. Every interactive component defines hover, focus, selected and disabled states. A CTA's meaning doesn't change silently. |
| Vague or overloaded CTAs and labels | CHK-04, CHK-05, CRT-11, PRF-02 | **A CTA names its action** («ادامه و پرداخت» rather than generic text). No promotional or warning copy inside buttons. No dead controls. Show a stepper or progress indicator for multi-step flows. |
| Search that doesn't understand Persian buyers | SRC-01, SRC-02, SRC-04, SRC-05 | **Search works in both Persian and English, with synonyms.** Rank primary products above accessories, autocomplete, and keep history. The zero-results state suggests alternatives. |
| Promo noise | PLP-04, Tabriz comments | **Use promotion signals sparingly.** Badge only meaningful discounts, and make the code value readable on mobile. |
| Financial information scattered | PRF-01, PRF-03, CSAT invoice comments | **One ledger.** A single transaction history across wallet, credit, installments, cancellations and invoices (فاکتور). Counts include every status. |
| Processes that are hard to follow (RFQ, order timeline) | RFQ-01, CRT-10 | **Long-running processes show their full timeline:** completed, current, and next step, plus an expected time. |

---

### 6\. Likely still present: **check** list (not verified; no browsing done)

Flags are based on the Jan 2026 user comments, which come about 6 months after the evaluation and repeat the same problems, and on the fact that no source records an implementation. "Strong" means 2026 user comments describe the same problem.

| ID | Issue | Flag | Basis |
| :---- | :---- | :---- | :---- |
| CRT-01 | Stock flips to unavailable at checkout | **check (strong)** | Several 2026 CSAT rows: «اول میزنه موجود بعد موقع خرید میزنه ناموجود» |
| CRT-03, PDP-01, PAY-01 | Slowness in quantity updates, modal and payment step | **check (strong)** | 13 Performance rows, e.g. «تا فاکتور رو ببندیم بریم صفحه پرداخت طول میکشه» |
| SRC-01, SRC-02, SRC-04 | Search relevance / Persian search | **check (strong)** | «سخته سرچ کردن», «هیچی سرچ نمیشه» |
| PLP-05 | «قیمت سفارشی» label / price not shown | **check (strong)** | «قیمتهای سفارشی زود اعلام نمیشه», «کالاهایی داخل سایت و قیمت نمیده» |
| WAL-01 \+ the gap of paying the shortfall at the gateway | Wallet top-up flow | **check (strong)** | 2 comments (CSAT, PLP research) about having to top up before buying |
| RFQ-01, CRT-10 | No order or RFQ progress shown | **check** | «پروسه جلورفتن سفارش رو نشون نمیده» |
| PAY-07, PRF-01 | Invoice or amount mismatch; no single ledger | **check** | «فاکتور نمیتونم ببینم… تعداد و قیمت باهم مغایرت داشته» |
| PLP-01..03 | Filter issues | **check** | «فیلترهای بیشتر بذارید» |
| PDP-11 | Warranty / product info missing | **check** | «اطلاعات و مشخصات کالا کامل تر قید شود» |
| CRT-06 | Login wall at add-to-cart (+ OTP delivery) | **check** | OTP SMS comments. The redirect itself isn't mentioned. |
| CHK-01, CRT-02, CRT-04, CRT-05, PLP-04 | Proposals No1/No2/No7/No12/No8 | **check** | Proposals and designs exist. Implementation is unknown. |
| All remaining Open items |  | **check** | No owner or solution recorded |

---

### 7\. Gaps for follow-up

- There is no implementation or status tracking in any source. The proposals' "Acceptance Criteria" sections are empty for No1, No2, No5, No7 and No8.  
- Proposal No10 (payable amount at address selection) has no real content because its body was copied from No9.  
- B2E and Enterprise Portals were never evaluated. Home, loyalty and KYC were not in scope.  
- 15 report-only issues, including 3 at severity 4 (PLP-01, PDP-03, PDP-04), were never put through the priority scoring.

---

## C — Usability & A/B Test Findings (DKB)

Source: Google Drive (read-only), 8 files. Extracted 2026-10-19. Privacy: participants are anonymised as P1–P5 or Agent 1–5. The Hybrid Payment dataset contains names and gender, which are deliberately left out here. Platform note: "CE Platform" in the source files is **B2R** (b2b.digikala.com).

| \# | Study | Date | Platform | Type | Source files |
| :---- | :---- | :---- | :---- | :---- | :---- |
| 1 | Hybrid Payment (پرداخت ترکیبی) | Dey 1404 / Jan 2026 (sessions on Tue 16 Dey 1404\) | B2R checkout | Internal moderated usability test, qualitative | Report docx `16j9MS2…`, Plan docx `1Brk4HW…`, One-pager png `1DogLEC…`, Dataset xlsx `1QC3K3P…` |
| 2 | Product Thumbnail Recognizability (bundle cards) | 2025-04-05 | B2R bundle cards (باندل) | Recognition test, 5 sales agents | `1GAxH9B…` |
| 3 | Best Selling Section Redesign (پرفروش‌ها) | 12 Aug – 7 Sep 2025 (17 Mordad – 16 Shahrivar 1404\) | B2R homepage | A/B test (PostHog) | Report `1CaEgCJ…`, Metrics xlsx `1KsSThV…`, Plan `1LodYKq…` |
| 4 | Homepage Redesign A/B Test Plan (5 iterations) | Plan dated 2025-09-07 | B2R homepage | A/B test plan; only the Best Selling iteration has a report | `1LodYKq…` |

---

### 1\. Hybrid Payment — Internal Usability Test (B2R)

**Feature.** One order can be paid with several methods together: wallet (کیف پول), credit (اعتبار), cheque (چک) and IPG/gateway (درگاه). The PRD logic is defined. The test asks whether that logic is **discoverable, understandable and predictable** when users get no explanation.

**Business case (from the one-pager).** The logic is complex and the financial risk is high. If users misunderstand it, they make errors and lose trust. Testing internally first lowers the risk before external release.

**Goal.** Check that users *understand* hybrid payment, not just that they can finish it by trial and error. Objectives:

1. Initial mental model and first choice: do users see the payment as single-method or multi-method?  
2. Can users discover the combination logic, and do they understand why amounts and states change?  
3. Where do users get confused, and how confident and trusting are they at completion?

**Method & sample**

- Moderated, one-on-one, qualitative and observational. Think-aloud was encouraged. **No explanation** of the logic was given before or during tasks.  
- 5 internal Digikala B2B staff. None of them worked on the feature. Roles: P1 supply, P2 strategy, P3–P5 sales.  
- Environment: Stage checkout with Hybrid Payment enabled. Screen recording and moderator notes.  
- Planned length was 15–20 min. The dataset records **8–10 min** per session.  
- Caveat stated in the report: internal colleagues may behave differently from real customers.

**Tasks**

- T1, natural choice: «فرض کن این سبد خرید برای توئه. لطفا پرداختش کن.»  
- T2, more than one method including cheque: «حالا این سفارش رو طوری پرداخت کن که از دو یا چند تا متد مختلف استفاده کنی. یکیش چک باشه.»

**Metrics** (as defined in the plan)

- Task Success: Done / Done with hesitation / Done with help / Fail. "Completion ≠ understanding". "Done with hesitation" is a strong signal of friction.  
- Time on Task: directional only, compared within each participant (T1 vs T2), never averaged.  
- Number of Adjustments (key metric): any add, remove, switch or reversal of a payment method. 1–2 \= intentional. 3+ \= trial-and-error.  
- SUS: the dataset has an SUS sheet, but **no scores were recorded**. The item wording also refers to another service («سرویس بام»), so it is an unadapted template. **No SUS result exists for this study.**

**Per-participant data (dataset)**

| P | T1 time | T1 success | T1 adjustments | T2 time | T2 success | T2 adjustments |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| P1 | 98s | Done | High (+5) | 127s | Done | Low (1-2) |
| P2 | 171s | Done with hesitation | Medium (3-4) | 265s | Done with help | High (+5) |
| P3 | 118s | Done with hesitation | High (+5) | 175s | Done with hesitation | Low (1-2) |
| P4 | 136s | Done with hesitation | High (+5) | 355s | Done with help | Medium (3-4) |
| P5 | 200s | Done with hesitation | High (+5) | 174s | Done with hesitation | Low (1-2) |

Report summary:

- T1: «۴ از ۵ نفر: Done with hesitation». Most participants: High adjustments (+5). Time «بین ۹۸ تا ۲۰۰ ثانیه».  
- T2: «۲ نفر: Done with help، ۳ نفر: Done with hesitation». Adjustments: 3 Low, 1 Medium, 1 High.  
- Data inconsistencies:  
  - The dataset marks P1's T2 as **Done**, not "with hesitation".  
  - The report says T2 was «سریع‌تر», but **4 of 5 participants were slower in T2**. P5 was the only one faster (200→174s).  
  - Learning shows in *fewer adjustments* (4/5 went down). It does not show in time. The cheque sub-flow adds extra steps.  
- Fail: 0 of 10 task attempts.

**Key quotes (verbatim)**

- «من نمیتونم بفهمم بر اساس کلیک من داره تصمیم میگیره اول از کدوم برداشت کنه؟»  
- «نفهمیدم که میتونم سه تاشم انتخاب کنم»  
- «اولش خیلی برام گنگ بود.»  
- «این که میشه از یه بخشی از چک استفاده کرد عجیبه، آشنا نیست. من فکر کردم حتما باید مبلغ چکم همون مبلغی باشه که باقیمانده پرداختمه»  
- «لازم دارم مبلغ سفارشم رو تو قیمت چک ببینم که بدونم چک رو چقدر بکشم»  
- «اگه چک روزه چرا باید تاریخ سر رسید داشته باشه؟»  
- «همه پلتفرمایی که تا حالا دیدم فقط یه روش پرداخت داشتن»  
- «اگه بهم نشون بده که یه روش رو انتخاب کردم باقیمانده‌آش چقدره میتونم بفهمم یه روش دیگه انتخاب کنم.»  
- «من متوجه نشدم که میتونم چک بالاتر ثبت کنم بعد انتخاب کنم یه مبلغیش برداشته بشه.»  
- «متوجه نمیشم چرا باید دوباره مبلغ چک رو انتخاب کنم.»  
- «چرا با اینکه چک رو تایید کردم میزنه هنوز اطلاعات چک را اضافه نکرده‌اید»  
- From observation (P2): after using the cheque, «پس باقیمانده چکم کجاست؟ باید به من نشون بده چی میشه.»

**Findings, ranked by severity**

1. **Critical. Cheque «انتخاب این چک» (select this cheque) is invisible, so users get stuck in a loop.**  
   - The button was **not seen in 4 sessions**. Users registered a cheque, believed it was done, and went back.  
   - Two patterns appeared:  
     - (a) going back with the browser or the top back button;  
     - (b) pressing «تایید اطلاعات چک» and returning to the methods page.  
   - In both cases the cheque was never selected and payment stayed blocked. This caused the most back-and-forth in the test.  
   - P4 registered a *second* new cheque instead of selecting the first one, and did not select that one either.  
2. **Critical. Cheque status «در حال بررسی» (under review) reads as "can't use yet".**  
   - After registering a cheque, users thought they had to wait for approval before paying with it.  
   - They finished only with moderator help.  
3. **High. Users don't discover hybrid payment on first exposure.**  
   - In T1 most participants assumed one payment method. They found the combination only by switching back and forth.  
   - Their mental model is "one order \= one method", carried over from other platforms.  
   - P1 also suspected that the order of clicks decides which source is debited first.  
4. **High. Cheque amount model mismatch (registration modal).**  
   - **All** users assumed the cheque amount must equal the order or remaining amount.  
   - They looked for the order amount inside the modal so they could copy it. They wanted it prefilled or at least shown there.  
   - A partial cheque («استفاده بخشی از مبلغ چک»), or a higher-value cheque with only part of it used, was unfamiliar and «عجیب».  
   - Because of this, being asked to enter an amount *again* when selecting the cheque felt illogical.  
5. **High. Pay CTA amount mismatch.**  
   - With 3 methods selected and part going to the gateway (IPG), the pay button still showed the **full order total**. In P4's session it showed «۲۱۴» while the user expected to pay «۶۴» by gateway.  
   - Users were unsure what would actually be charged.  
6. **Medium. Left sidebar summary is too weak.** «مبلغ قابل پرداخت» (payable amount) and «باقیمانده پرداخت» (remaining amount) did not draw enough attention.  
7. **Medium. Amount changes per method are unclear.**  
   - The **blue badge** (بج آبی) showing changed amounts went unnoticed.  
   - Users read the **subtitle text under the method title** instead. P2 «توجهش اصلا به تغییرات عددای هر متد نشد».  
8. **Medium. «افزودن چک» (add cheque) button has low visibility, and the yellow badge competes with it.**  
   - The yellow badge (بج زرد) was more eye-catching than the add-cheque button. Some users clicked the badge, which shows an error state.  
   - Several users thought that ticking the cheque method alone was enough.  
9. **Medium. «استفاده از کل مبلغ چک» (use the full cheque amount) was never seen.** Every user typed the amount by hand.  
10. **Medium. Contradictory date guidance.**  
    - The cheque helper text says the cheque date must be current (به‌روز / چک روز).  
    - Yet **4 cases** were offered a due date (تاریخ سررسید).  
    - User reaction: «اگه چک روزه چرا باید تاریخ سر رسید داشته باشه؟»  
11. **Medium. Misleading error after confirming.** After «تایید» the user saw «هنوز اطلاعات چک را اضافه نکرده‌اید» (you haven't added cheque info yet) even though they had just confirmed.

**Recommendations**

- The report's conclusion asks for better clarity, feedback, and alignment of the system logic with user decisions.  
- The bullets below come from the report's problem list and its quotes; the report does not give an explicit list.  
- Signal from the first view that methods can be combined, for example a heading or helper line saying several methods can be combined. Do not depend on discovery through trial and error.  
- Show, per method, the amount it covers and the **remaining amount** live. Make the remaining amount the most prominent number. Strengthen the sidebar «مبلغ قابل پرداخت / باقیمانده پرداخت».  
- Make the debit order deterministic and explain it, so users don't think click order matters.  
- In the cheque flow:  
  - Show the order and remaining amount inside the registration modal, or prefill it.  
  - After registering, **auto-select** the new cheque, or make «انتخاب این چک» the primary CTA.  
  - Make «استفاده از کل مبلغ چک» the default or clearly visible.  
  - State clearly that a cheque «در حال بررسی» can still be used for this order, if the PRD allows it.  
  - Fix the date helper so it matches the date picker.  
  - Fix the false «هنوز اطلاعات چک را اضافه نکرده‌اید» error.  
- The pay CTA should show the **amount to be paid now via the gateway**, not the order total. Show the breakdown as well.  
- Lower the visual weight of the yellow warning badge relative to the «افزودن چک» action, or make the badge itself act as the action.

**Result.** Hybrid payment is *functionally* usable (0 fails) but *not intuitive*. It relies on learning through trial and error, which is a risk in a high-stakes payment flow. Combining methods can be learned; the cheque logic is still unclear. No ship or hold decision is recorded.

---

### 2\. Product Thumbnail Recognizability — Bundle Cards (B2R)

**Date.** 2025-04-05. **Platform.** B2R bundle cards (new design). **Question.** The new bundle cards show small thumbnails of the products in each bundle. Can users actually recognise the phones from these images? **Method & sample**

- 3 bundles were built (Samsung, Xiaomi, Honor), each with 4 random phone images of that brand.  
- 5 sales agents named the models they recognised.  
- Metric: identification success rate.

**Results** (✅ \= correct; Agent 1–5)

| Brand | Model | A1 | A2 | A3 | A4 | A5 | Model success % |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| Samsung | A55 | ✅ | ✅ | ❌ | ❌ | ✅ | 60 |
| Samsung | S23 FE | ❌ | ❌ | ✅ | ❌ | ❌ | 20 |
| Samsung | A35 | ✅ | ✅ | ✅ | ❌ | ❌ | 60 |
| Samsung | A15 | ✅ | ❌ | ❌ | ❌ | ❌ | 20 |
| Xiaomi | Redmi Note 13 | ✅ | ❌ | ✅ | ✅ | ✅ | 80 |
| Xiaomi | Poco C65 | ❌ | ❌ | ✅ | ❌ | ❌ | 20 |
| Xiaomi | Poco M5s | ✅ | ✅ | ✅ | ❌ | ✅ | 80 |
| Xiaomi | A3 | ❌ | ✅ | ✅ | ✅ | ✅ | 80 |
| Honor | X9b | ❌ | ✅ | ❌ | ✅ | ❌ | 40 |
| Honor | 90 | ✅ | ✅ | ✅ | ❌ | ❌ | 60 |
| Honor | 200 | ❌ | ❌ | ❌ | ❌ | ❌ | 0 |
| Honor | X8b | ❌ | ✅ | ❌ | ✅ | ❌ | 40 |

Brand success: Samsung **40%**, Xiaomi **65%**, Honor **35%**. **Overall success: 47%.**

**Findings, ranked by severity**

1. **High. Thumbnails alone don't identify the product.** Overall recognition was 47%. One model (Honor 200\) was recognised by nobody (0%).  
2. **High. Look-alike models in the same series get confused.** The Samsung A-series (A25/A35/A55) caused the most errors.  
3. **Medium. Recognition depends on familiarity.** Older or less-sold models were poorly recognised; agents recognise what they currently sell.  
4. **Note.** Xiaomi did best (65%) because its back-cover designs differ more.

**Recommendation / decision (implied).** Use thumbnails as visual support only. Always show the model name and the variant text next to or under the thumbnail. No formal decision is recorded.

---

### 3\. A/B Test — Best Selling Section Redesign (B2R Homepage)

**Dates.** 12 Aug 2025 – 7 Sep 2025 (17 Mordad – 16 Shahrivar 1404). The report says "1 Month"; the actual span is about 26 days. **Goal.** Give quicker access to inline products by cutting add-to-cart steps, so DKPCs can be added straight from the homepage. **Hypothesis.** If DKPs are replaced with DKPCs and direct Add-to-Cart is enabled on the homepage, then inline purchase rate will rise and bounce rate will fall, because users finish the action faster with fewer steps.

Glossary: DKP \= product page/entity; DKPC \= product variant/configuration (the purchasable SKU, e.g. a colour or storage option).

**Setup**

- A (Control): «پرفروش‌ترین‌ها» (best sellers) showing **DKPs in a 4×3 grid**. Adding a DKPC to cart happens **inside a modal**.  
- B (Test): **DKPCs in a 4×4 grid**, with add-to-cart **directly on the card**.  
- Audience: all homepage visitors, split 50/50.  
- Primary metric: Add-to-cart CTR. Secondary: CR. Feature flag: `best-seller-redesign`. PostHog experiment 61044\.  
- Plan targets:  
  - Inline Add-to-Cart baseline \~7.09, MDE 30%.  
  - Sample \~4,658, \~21.3 days.  
  - Analysis: two-sided z-test, α \= 0.05, power 80%.

**Results** (verbatim from the report)

| Metric | A Control | B Test | Delta | Significant (report) |
| :---- | :---- | :---- | :---- | :---- |
| add to cart product Mobile | 5.20% (103/1982) | 5.76% (111/1928) | \+10.71% | ❌ |
| add to cart product Desktop | 3.43% (68/1982) | 3.63% (70/1928) | \+5.82% | ❌ |
| Add to cart | 8.07% (160/1982) | 8.97% (173/1928) | \+11.15% | ✅ |
| CR | 9.08% (180/1982) | 10.94% (211/1928) | \+20.51% | ✅ |

**Report's other observations**

- AOV **went down**: the easier flow encouraged smaller or single-item carts.  
- Time-to-purchase did not change.  
- Bounce rate did not change.  
- Hypothesis: **partially** held. Add-to-cart and CR improved; bounce and speed did not.

**Decision.** **Variant B won.**

- Roll out to 100% of homepage visitors.  
- Monitor for 2 weeks after launch.  
- Future work: protect basket size with upsell, cross-sell and «frequently bought together».

**Caveats: re-checked against the plan's stated method (two-sided z-test, α \= 0.05)**

- Add to cart, 160/1982 vs 173/1928: z ≈ 1.01, **p ≈ 0.31, not significant**.  
- CR, 180/1982 vs 211/1928: z ≈ 1.94, **p ≈ 0.052, borderline and not significant at 0.05**.  
- Total sample was 3,910, below the plan's \~4,658.  
- The observed uplift (+11%) is far below the planned MDE (30%).  
- The "significant ✅" flags in the report are not reproduced by a pooled z-test on the reported counts. Treat the win as **directional**. AOV also fell.  
- The Mobile/Desktop rows use the same denominators as the totals, and 103 \+ 68 ≠ 160\. The rows probably mean product categories (mobile phones vs. something else), not device type, but this is ambiguous.

**Pre-test baseline data (A\_B Test \- Metrics.xlsx; 14 daily CTR values, used to size MDE)**

| Metric | Event | Day 1 CTR (first column) | 14-day avg | STDV | SE | MDE (abs) | Relative MDE |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| CTR on More Detail Button (baskets) | View Basket | 11.63 | 8.35 | 5.49 | 1.47 | 4.76 | 56.98% |
| Best selling Section | Add to cart Product | 14.81 | 14.80 | 5.35 | 1.43 | 4.64 | 31.34% |

- Daily values for More Detail include 0.00 on several days (tracking gaps).  
- The plan used a 10% baseline and 35% MDE for More Detail, against the measured 8.35% and 56.98%.

---

### 4\. Homepage Redesign — A/B Test Plan (B2R)

**Date.** 2025-09-07. **Goal.** Increase items added to cart from the homepage. Each redesign change gets its own A/B iteration (PostHog).

| Iteration | Change | Hypothesis | Primary metric (baseline / MDE / n / days) | Segment | Status |
| :---- | :---- | :---- | :---- | :---- | :---- |
| Basket Layout (باسکت‌ها) | Horizontal carousel → **vertical list** (desktop \+ mobile) | A vertical list is more readable and easier to scan and compare, so more clicks on «More Detail» | CTR on More Detail: 10% / 35% / 2350 / 14\. Flag `basket-section-redesign`, exp 61042 | All visitors | No report found |
| Most Selling | DKP 4×3 → DKPC 4×4 with direct add-to-cart | Fewer steps lead to more inline purchases | Inline Add-to-Cart \~7.09 / 30 / \~4,658 / \~21.3 | All visitors | **Done, B won (see §3)** |
| Promotion Tags on Baskets | Visual tags on selected baskets ("can be anything to distinguish") | Tags stand out and signal value or urgency, so more CTR and CR | CTR on tagged baskets (no baseline set) | All visitors | Not run / no report |
| Hero Layout | Dominant banner → **3 columns: categories \+ smaller banner \+ dynamic section**; value proposition in the first fold | Better use of the first fold, so more engagement | CTR on banner / category shortcuts / suggested section | Logged-in users | No report |
| Current Order Exposure | Current order(s) with status on the homepage (mobile \+ desktop): order detail, invoice download | Easier post-purchase access, so more engagement and less support load | Clicks on Order Detail and Invoice links | Logged-in users who have purchased | No report |

Hero dynamic section has 3 states:

1. Guest: encourage sign-up.  
2. Logged in with no order yet.  
3. Has orders: show previously purchased and related products.

Also listed in the redesign but with no test defined: Categories section, Banner carousel, Products You May Like.

Decision rules:

- Significant means p \< 0.05 (two-sided) **and** the effect is practically meaningful against the MDE.  
- Secondary metrics must hold steady or improve. Effort is also weighed.  
- If a variant fails, it is rejected, the current version stays, and the team iterates.

---

### Design rules learned

**Hybrid payment / checkout (B2R)**

- Users start from "one order \= one payment method". The UI must say up front that methods can be combined. Never rely on discovery through trial and error in a payment flow.  
- The **remaining amount** («باقیمانده») is the number users steer by. Show it live and prominently after every selection, both per method and in the summary. Small coloured badges (the blue badge) go unnoticed; users read the text under the method title.  
- Allocation must be predictable. Users suspect that click order decides which source is debited first, so state the rule (or a fixed order) explicitly.  
- The pay CTA label must show **what will be charged now** (the gateway portion), not the order total.  
- Users think of a cheque as covering exactly the order or remaining amount:  
  - Show and prefill the order or remaining amount in the cheque modal.  
  - Make "use the full cheque amount" the default.  
  - Present a partial-use or higher-value cheque as an explicit, explained option, not as an unexplained second amount input.  
- A newly registered cheque should be **auto-selected** for the current payment, or selecting it must be the primary, unmissable CTA. "Registering" and "using" are one step in the user's mind.  
- Pending states («در حال بررسی») next to a selectable item read as "not usable". If it is usable, say so explicitly.  
- Helper text must match the inputs (no "cheque must be current" alongside a due-date picker).  
- Warning badges must not be visually stronger than the primary action they relate to (the yellow badge vs «افزودن چک»).  
- Errors must reflect the real state (no «هنوز اطلاعات چک را اضافه نکرده‌اید» after confirming).  
- Judge payment UX by adjustments and understanding, not by completion. 5/5 completed, yet 4/5 hesitated.

**Product thumbnails / cards**

- Product thumbnails are **not** reliable identifiers for phones (47% overall, 0% for some models). Always pair them with the model name and key variant text.  
- Look-alike series (e.g. Samsung A-series) need text differentiation. Don't rely on the image.  
- Familiar, currently-sold models are recognised better; don't assume that images of older or long-tail models carry meaning.

**Homepage / merchandising**

- Direct add-to-cart on homepage product cards (DKPC-level, no modal) raised add-to-cart (+11.15%) and CR (+20.51%). The significance is weak (see caveat), and the cost is lower AOV.  
  - Pair it with basket-building patterns: upsell, cross-sell, «frequently bought together».  
- The homepage works as a transactional touchpoint, not only a discovery page.  
- Show purchasable variants (DKPC) rather than product pages (DKP) in high-intent sections like best sellers.  
- Planned direction, not yet validated:  
  - vertical basket lists instead of carousels;  
  - promotion tags on baskets;  
  - a 3-column hero with a personalised dynamic slot (guest / no-order / has-order);  
  - current-order status and invoice on the homepage.

### Conflicts with current Figma/live (evident from the sources)

- **Hybrid payment stage build vs findings.** The pay CTA shows the full total. «انتخاب این چک» and «استفاده از کل مبلغ چک» are low-visibility. The yellow badge outweighs «افزودن چک». The cheque modal lacks the order amount. The date helper («به‌روز») conflicts with the due-date suggestion. A false error appears after confirming. Check whether the current Figma or live build has fixed these.  
- **Best Selling rollout.** The decision was a 100% rollout of the 4×4 DKPC grid. If live still shows the 4×3 DKP grid with an add-to-cart modal, it is out of date. Figma reference: Home-Page file, node 1830-172438.  
- **Bundle cards.** If the current bundle card design relies on thumbnails without model names, it conflicts with the thumbnail test.  
- **Homepage plan vs evidence.** The basket vertical list, promotion tags, hero 3-column layout and current-order section have **no test results** in Drive. If they are already live or final in Figma, they are unvalidated.  
- **Metric hygiene.** The A/B report's significance flags do not match the plan's own z-test method. The hybrid payment report's claim that T2 was faster contradicts its own dataset. The SUS sheet was never filled in and its items refer to another service ("بام").

---

## D — CSAT & Survey Insights (DKB: B2R / B2E)

> **Status (19 Oct 2026, design lead):** these CSAT reports are old (1403–1404). The Platform / Retailer / Reseller segments they use are **no longer in use** — treat scores and segment definitions as historical signals only, not current KPIs or personas.

Source: Google Drive (read-only). Files: `Platform - CSAT Aban1404.pdf`, `Retailer - CSAT Aban1404.pdf`, `Reseller - CSAT Aban1404.pdf`, `B2E - CSAT Aban1404.pdf`, `CSAT Comments Tags 2026-01-20.csv`, `Survey _ Business Health Check.xlsx`, `CSAT Analysis DataSet 1403.xlsx`, `CSAT Analysis DataSet 1404.xlsx`. Privacy: only aggregates below. No names, phones, customer IDs or verbatim quotes were copied from the datasets. Prepared 2026-10-19. Persian month names: Farvardin→Esfand \= months 1–12 of the Iranian year (Aban 1404 ≈ Oct/Nov 2025, Azar 1404 ≈ Nov/Dec 2025).

---

### 1\. What CSAT measures here

- **Method:** a monthly phone/online survey of customers who ordered that month (the 1404 dataset has a "ParticipationBase" sheet with *Eligible Customers → Respondents*). Each respondent gives an **Overall CSAT Score** plus a score for each touchpoint, a free-text "reason for dissatisfaction" (علت نارضایتی) per touchpoint, and a free-text general suggestion/criticism (پیشنهاد و انتقاد کلی).  
- **Scale:** 1–5 (1 \= کاملا ناراضی / very dissatisfied … 5 \= کاملا راضی / very satisfied). **CSAT % \= share of 4s and 5s (top-2-box).** I checked this against the reports: Platform Aban \= (142 \+ 52)/230 \= 84%.  
- **Reports:** a monthly deck per segment with three parts: overview, metric trends with Voice of Customer, and summary with priorities. Comment tagging is done in **Dovetail** (`digikala-business.dovetail.com`).

#### Touchpoints measured per segment (1404 questionnaire)

| Touchpoint (FA) | EN | Platform (Default) | Retailer | Reseller | B2E |
| :---- | :---- | :---- | :---- | :---- | :---- |
| قیمت محصولات | Product price | ✓ | ✓ | ✓ | ✓ |
| تنوع (و موجودی) محصولات | Variety & stock | ✓ | ✓ | ✓ | ✓ |
| مدت زمان تسویه حساب و پرداخت | Settlement period & payment | — | ✓ | ✓ | ✓ |
| ارسال و تحویل کالاها | Shipping & delivery | ✓ | ✓ | ✓ | ✓ |
| خدمات پس از ثبت سفارش | Post-order services (cancel/refund/returns/updates) | ✓ | ✓ | ✓ | ✓ |
| پشتیبان فروش / کارشناس فروش / اکانت منیجر | Sales support / sales expert / account manager | پشتیبان فروش (sales support) | کارشناس فروش (sales expert) | پشتیبان فروش (sales support) | اکانت منیجر (account manager) |
| دریافت و ثبت فاکتور | Invoice receipt & registration (incl. Moaddian tax system) | ✓ | ✓ | ✓ | ✓ |
| ثبت سفارش با DKP | Ordering via DKP | — | — | — | ✓ |
| تامین کالا | Product sourcing / fulfilment of requested items | — | — | — | ✓ |

**The 1403 questionnaire was more granular** (useful for design). For Retailer it included: identity verification/KYC (فرایند احراز هویت), delivery-code SMS (ارسال کد تحویل), shipping-time notification (اطلاع رسانی زمان ارسال), delivery on the promised date, item matches the order, complete order with no missing items, split shipments, invoice process, sales team, return process, and refund of returned items. B2E also had Moaddian invoice registration, delivery with national ID card and stamp, and DKP ordering.

---

### 2\. Segment definitions (Reseller vs Retailer vs Platform/"Default" vs B2E)

**The reports and datasets never state a formal definition.** What follows is inferred from the data structure and should be confirmed with the CX/BI team.

- The **channels in the data** are `B2E`, `B2R - Reseller`, `B2R - Retailer` and **`Default`**.  
- **"Platform" report \= `Default` channel.** The Platform Aban deck matches the Default sheet exactly (n \= 230, 84%). The deck title reads "مشتریان پلتفرم" (platform customers). This appears to be the **self-serve B2R customer base** (shops ordering on b2b.digikala.com) that has no dedicated sales owner. It is by far the largest group: 230 of 307 respondents in Aban.  
- **B2R \- Retailer:** surveyed about a **"sales expert" (کارشناس فروش)**. This is a small, managed group (n \= 16 in Aban).  
- **B2R \- Reseller:** surveyed about **"sales support" (پشتیبان فروش)**, with heavy emphasis on settlement terms and invoicing. In the Business Health Check call list, Reseller accounts are mostly registered companies and Tehran-based. Default accounts are mostly individuals or shops spread across many provinces. *Interpretation:* Resellers are larger, company-type B2R buyers who resell in volume and care about credit and settlement terms and about official invoices for tax (Moaddian). Retailers are managed end-retail shops.  
- **Caution on 1403 vs 1404:** the 1403 dataset has **no `Default` sheet**. Its "B2R \- Retailer" sheet (n \= 470 over 6 months) included KYC and delivery-code questions, which are typical of self-serve shop onboarding. It therefore likely corresponds to what 1404 splits into `Default` \+ `Retailer`. **Do not compare 1403 Retailer with 1404 Retailer like-for-like.**  
- **B2E:** organisations and companies (SME/enterprise procurement). They have an account manager and the **DKP** ordering flow, and some buy gift cards (کارت هدیه).

---

### 3\. Sample sizes & participation (1404)

| Month 1404 | B2E (elig→resp) | Reseller | Retailer | Default | Total | Part. rate |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| Farvardin | 69→43 (62.3%) | 40→24 (60.0%) | 6→4 (66.7%) | 26→18 (69.2%) | 141→89 | 63.1% |
| Ordibehesht | 113→77 (68.1%) | 100→60 (60.0%) | 18→11 (61.1%) | 109→69 (63.3%) | 340→217 | 63.8% |
| Khordad | 39→20 (51.3%) | 33→17 (51.5%) | 3→1 (33.3%) | 51→34 (66.7%) | 126→72 | 57.1% |
| Tir | 88→57 (64.8%) | 116→59 (50.9%) | 41→22 (53.7%) | 173→110 (63.6%) | 418→248 | 59.33% |
| Mordad | 84→58 (69.0%) | 59→34 (57.6%) | 36→23 (63.9%) | 213→138 (64.8%) | 392→253 | 64.54% |
| Shahrivar | 78→34 (43.6%) | 92→58 (63.0%) | 28→16 (57.1%) | 301→212 (70.4%) | 499→320 | 64.13% |
| Mehr | 56→32 (57.1%) | 51→29 (56.9%) | 18→9 (50.0%) | 231→147 (63.6%) | 356→217 | 60.96% |
| Aban | 64→31 (48.4%) | 62→30 (48.4%) | 37→16 (43.2%) | 367→230 (62.7%) | 530→307 | 57.92% |
| **Far–Aban total** |  |  |  |  | **2802→1723** | **61.49%** |

The 1404 dataset also contains **Azar 1404** responses, one month beyond the PDFs: B2E 32, Reseller 24, Retailer 15, Default 175\. Dataset rows Far–Azar: B2E 386, Reseller 333, Retailer 117, Default 1132\. 1403 dataset (Mehr–Esfand 1403): B2E 308, Retailer 470, Reseller 346\.

**Caveat:** Retailer (n \= 1–23 per month), Reseller and B2E (about 20–77 per month) are small samples. The reports themselves warn that month-to-month swings are largely sample noise and should not drive standalone decisions.

---

### 4\. Overall CSAT by segment and over time

#### Aban 1404 headline (from the PDFs)

| Segment | CSAT | Δ vs Mehr | Respondents | Score split (5/4/3/2/1) |
| :---- | :---- | :---- | :---- | :---- |
| Platform (Default) | **84%** | \+3 | 230 (+83) | 142 (62%) / 52 (23%) / 28 (12%) / 1 (0.5%) / 7 (3%) |
| Retailer | **100%** | \+22 | 16 (+7) | 14 (88%) / 2 (12%) / 0 / 0 / 0 |
| Reseller | **97%** | \+18 | 30 (+1) | 18 (60%) / 11 (37%) / 1 (3%) / 0 / 0 |
| B2E | **90%** | \+2 | 31 (−1) | 19 (61%) / 9 (29%) / 2 (7%) / 0 / 1 (3%) |

#### Monthly overall CSAT % (n), 1404, computed from the dataset (matches the PDFs)

| Segment | Far | Ord | Kho | Tir | Mor | Sha | Meh | Aban | Azar | Far–Azar |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| Default/Platform | 94% (18) | 72% (69) | 76% (33) | 73% (110) | 83% (138) | 85% (212) | 81% (147) | 84% (230) | 83% (175) | **82%** (1132), mean 4.27 |
| Retailer | 75% (4) | 82% (11) | 100% (1) | 82% (22) | 78% (23) | 94% (16) | 78% (9) | 100% (16) | 93% (15) | **86%** (117), mean 4.42 |
| Reseller | 78% (23) | 73% (60) | 65% (17) | 73% (59) | 88% (33) | 88% (58) | 79% (29) | 97% (30) | 79% (24) | **80%** (333), mean 4.22 |
| B2E | 67% (45) | 70% (77) | 95% (20) | 79% (57) | 83% (58) | 79% (34) | 88% (32) | 90% (31) | 72% (32) | **78%** (386), mean 4.15 |

1403 (Mehr–Esfand): B2E **80%** (308, mean 4.23); B2R-Retailer **70%** (470, mean 3.97; monthly 69/70/60/87/83/70%); B2R-Reseller **81%** (346, mean 4.24). **Read:** overall satisfaction is fairly high and stable (about 80–85%). Aban was a local peak in every segment, and Azar fell back (B2E 72%, Reseller 79%). The real story is in the touchpoints: **price and variety sit far below the overall score**.

---

### 5\. Touchpoint CSAT (where the pain is)

#### 1404 full period (Far–Azar), CSAT % (n)

| Touchpoint | Default/Platform | Retailer | Reseller | B2E |
| :---- | :---- | :---- | :---- | :---- |
| Price | **59%** (1105) | **70%** (114) | **60%** (321) | 81% (375) |
| Variety / stock | **63%** (1106) | 86% (111) | 72% (321) | 82% (371) |
| Settlement & payment | — | **72%** (110) | **65%** (318) | 82% (372) |
| Shipping & delivery | 80% (1079) | 74% (112) | 70% (322) | **78%** (373) |
| Post-order services | 87% (912) | 92% (106) | 88% (299) | 91% (351) |
| Sales support / AM | 94% (1051) | 97% (111) | 98% (326) | 92% (375) |
| Invoice receipt & registration | 95% (1082) | 85% (109) | 86% (322) | 84% (373) |
| DKP ordering | — | — | — | 85% (372) |
| Product sourcing (تامین) | — | — | — | 84% (372) |

#### Aban 1404 touchpoint CSAT (from the PDFs)

- **Platform:** Price 66% (225) · Variety 75% (229) · Delivery 69% (219) · Post-order 90% (177) · Support 96% (217) · Invoice 96% (228).  
  - The deck text says delivery rose "+1 vs Mehr" and the trend line shows Mehr 82% → Aban 69%. The chart labels are probably out of order in the extraction. The dataset gives **Delivery Aban 83% (211)**, so treat 69% as an extraction artefact. The same applies to Price, which the dataset gives as 60% (225) in Aban.  
- **Retailer** (dataset, Aban): Price 81% · Variety 93% · Settlement 73% · Delivery 93% · Post-order 93% · Sales expert 100% · Invoice 100%.  
- **Reseller** (dataset, Aban): Price 63% · Variety 85% · Settlement 77% · Delivery 88% · Post-order 92% · Sales support 96% · Invoice 83%.  
- **B2E** (dataset, Aban): Price 90% · Variety 100% · DKP 81% · Sourcing 86% · Settlement 89% · Delivery 86% · Post-order 82% · AM 90% · Invoice 86%.  
  - Deck: DKP ordering −16 vs Mehr, post-order −18, AM −7, invoice −4.

#### Platform price trend (Far→Aban)

50 → 47 → 48 → 56 → 66 → 63 → 56 → 60%. Price is the persistently lowest score for the largest segment.

#### Platform variety trend (Far→Aban)

61 → 59 → 61 → 57 → 60 → 62 → 58 → 74/75%. Aban was the first real jump (+17 in the deck).

#### Report-stated "most influential" metrics, Aban 1404

| Segment | Pulling satisfaction down | Pushing satisfaction up |
| :---- | :---- | :---- |
| Platform | Price 60% (of 225 responses) · Variety 74% (of 221\) | Invoice receipt 96% (of 219\) · Support response quality 96% (of 209\) |
| Retailer | Settlement & payment 73% (of 15\) | Sales-support response quality 100% (of 15\) · Invoice 100% (of 16\) |
| Reseller | Price 63% (of 27\) · Settlement & payment 77% (of 26\) | Sales-support response quality 96% (of 28\) · Post-order services 92% (of 24\) |
| B2E | DKP ordering 81% (of 27\) · Post-order services 82% (of 27\) | Variety 100% (of 27\) · Price 90% (of 29\) |

#### Report priority matrices (Aban 1404\)

Taken from the decks' closing slide. The PDF text extraction may have misaligned columns, so verify visually.

- **Platform:**  
  - Main cause of dissatisfaction: Price, Delivery, Variety & stock.  
  - Serious improvement needed: Invoice, Post-order services.  
  - Minor improvement: Support.  
- **Retailer:**  
  - Main: Price, Settlement & payment, Invoice.  
  - Serious: Delivery, Variety.  
  - Minor: Sales support, Post-order.  
- **Reseller:**  
  - Main: Delivery, Invoice.  
  - Serious: Settlement & payment, Price, Variety.  
  - Minor: Sales support, Post-order.  
- **B2E:**  
  - Main: Invoice, DKP ordering, Product sourcing.  
  - Serious: Settlement & payment, Delivery, Post-order.  
  - Minor: Price, Variety, AM quality.

---

### 6\. Drivers of dissatisfaction (computed, 1404 Far–Azar)

This is the share of **overall-dissatisfied respondents (overall score ≤3)** who also scored each touchpoint ≤3. It is a proxy for "what drags the overall score".

| Touchpoint | Default (n=207) | Retailer (n=16) | Reseller (n=66) | B2E (n=84) |
| :---- | :---- | :---- | :---- | :---- |
| Price | **66%** | **69%** | **65%** | 42% |
| Variety / stock | **52%** | 31% | 44% | 30% |
| Delivery | 42% | **75%** | **59%** | **51%** |
| Settlement & payment | — | 50% | **53%** | 32% |
| Post-order | 31% | 27% | 32% | 20% |
| Invoice | 11% | 47% | 30% | 31% |
| Sales support / AM | 19% | 12% | 6% | 27% |
| DKP ordering | — | — | — | 38% |
| Product sourcing | — | — | — | 37% |

1403 equivalents (more granular):

- **Retailer** (n=141 dissatisfied):  
  - Variety 76%, Price 65%, On-time delivery 61%, Return refund 62%, Returns process 56%, Shipping-time notification 52%.  
  - Low: KYC 20%, item match 16%, complete order 14%.  
- **Reseller** (n=67):  
  - On-time delivery 72%, Shipping-time notification 64%, Price 61%, Invoice process 61%, Settlement 54%.  
- **B2E** (n=61):  
  - Returns 60%, On-time delivery 57%, Sourcing 55%, Shipping-time notification 54%, Split shipments 49%, Settlement 48%, DKP 44%.

**Satisfaction anchors:** human support is consistently the best-rated touchpoint (sales support/expert/AM 92–98%). So are order accuracy (item match 90–95%, no missing items 88–93% in 1403\) and, for Platform, invoice receipt (95%).

---

### 7\. Comment themes (no verbatims)

#### 7a. Report-coded themes, Platform Aban 1404 (from the PDF)

- **Price: 175 comments (43% of all comments), 4 themes:**  
  - Comparison with other suppliers 58  
  - B2B vs B2C (Digikala consumer site) comparison 57  
  - High price / "non-cooperative" (not trade) pricing 54  
  - Discounts & offers 5  
  - Price fluctuation 1  
  - Competitors named: HamrahTel 15, Mobile140 12, Bazar Alaeddin 10, Eways 7, Kasra Pars 5, Technolife 4\.  
  - Insight: B2B prices are seen as equal to or higher than B2C and the open market. The margin is too thin to resell, and customers expect at least a 1–2% margin.  
- **Variety & stock: 96 comments (23%), 7 themes:**  
  - Limited variety & stock 35  
  - Limited mobile variety 31  
  - Limited accessories (AC) 10  
  - Custom price (قیمت سفارشی) 8  
  - Laptops 4  
  - IT 4  
  - Order cancelled due to no supply 4  
  - Brand mentions on mobile scarcity: iPhone, Samsung, Xiaomi (7–9 each).  
  - Customers also say search on the B2B site returns too little compared with the main Digikala site.  
- **Shipping & delivery: 65 comments (15%), 6 themes:**  
  - Shipping delay 44  
  - Delivery outside the chosen window 7  
  - National-ID-card check at delivery 6  
  - Courier behaviour 3  
  - In-person delivery 1  
  - Related: no clear delivery hour, and delivery promised in 24h arriving in 48h.  
- **Post-order services: 25 comments (6%):**  
  - Delayed refund 11  
  - Poor notification (cancellations, schedule changes) 11  
  - Returns problems 3  
- **Support: 8 comments (2%).** Busy line, no follow-up, callbacks not made.  
- **Invoice: 9 comments (2%).** Customers want to print the invoice at order time, an accurate invoice, a paper invoice, and the invoice issued before dispatch.  
- **Other:**  
  - Requests for credit purchase and to "work on credit like HamrahTel/Kasra"  
  - Paying with a mix of wallet/credit and the payment gateway in one purchase  
  - Answering custom-price requests within an hour  
  - Site bugs, slowness, and no visible order-progress tracking  
  - Unclear warranty  
  - Adding accessories and screen protectors

#### 7b. Keyword-coded themes across all 1404 comments (computed, Far–Azar)

Method: Persian keyword matching over all non-empty "reason" and "suggestion" fields. One comment can hit several themes, so treat the numbers as indicative.

| Theme | Default (1902 comments) | Reseller (563) | Retailer (171) | B2E (731) |
| :---- | :---- | :---- | :---- | :---- |
| Price high (any) | **406 (21%)** | 54 (10%) | 28 (16%) | 58 (8%) |
| Price vs Digikala B2C / main site | **246 (13%)** | 21 (4%) | 7 (4%) | 56 (8%) |
| Price vs named competitor / bazaar | **226 (12%)** | 26 (5%) | 19 (11%) | 20 (3%) |
| Variety low | 228 (12%) | 60 (11%) | 8 (5%) | 40 (5%) |
| Out of stock / not supplied | 173 (9%) | 24 (4%) | 7 (4%) | 85 (12%) |
| Custom price (quote) | 42 (2%) | — | — | — |
| Delivery late | 256 (13%) | **143 (25%)** | **46 (27%)** | **107 (15%)** |
| Delivery window / coordination | 113 (6%) | 42 (7%) | 13 (8%) | 38 (5%) |
| National ID / stamp at delivery | 40 (2%) | 5 (1%) | — | 27 (4%) |
| Settlement period / payment terms | 85 (4%) | **175 (31%)** | 37 (22%) | 88 (12%) |
| Credit / installments | 73 (4%) | 22 (4%) | 9 (5%) | 29 (4%) |
| Invoice / Moaddian / official | 63 (3%) | 49 (9%) | 16 (9%) | 66 (9%) |
| Cancellation | 65 (3%) | 7 (1%) | 1 | 16 (2%) |
| Refund slow | 54 (3%) | 11 (2%) | 7 (4%) | 7 (1%) |
| No notification | 66 (3%) | 12 (2%) | 2 | 21 (3%) |
| Support/AM responsiveness | 57 (3%) | 18 (3%) | 4 | 49 (7%) |
| Site/app UX (search, bugs, speed, panel)\* | 137 (7%) | 33 (6%) | 12 (7%) | 53 (7%) |
| Warranty | 19 (1%) | 9 (2%) | 1 | 1 |

\*The UX keyword set is noisy, because "سایت" (site) also appears in price comparisons.

Per-touchpoint reason counts, Default: price reasons 457, variety 407, delivery 214, post-order 123, support 59, invoice 57\. For Reseller, settlement reasons (111) outnumber price reasons (41).

#### 7c. Dovetail tag taxonomy (CSAT Comments Tags, 2026-01-20)

The CSV export has **no counts**. It lists about 100 tags in 11 groups, which is useful as a coding frame:

- **Price (31):**  
  - High Price; Comparing B2B vs B2C; Price Comparison Unspecified; Price Fluctuation; Offer & Discount; Request for Price List; Local Suppliers.  
  - About 24 named competitors or comparison sources, e.g. HamrahTel, Mobile 140, Technolife, EWays, Kasra Pars, Bazzar/Alaeddin, Torob, Yaran, Samtel, Digi Shahr…  
- **Shipment & Delivery (13):** Delayed Shipment; Outside Time Window; ID Card Required; Delivery Code SMS Not Sent; Split Shipments; Order Mismatch; Missing Items; Poor Packaging; Courier Behavior; In-Person Issues; High Shipping Cost; Request for Mahex; Other.  
- **Invoice (11):** Mismatch vs Moaddian; Late Registration in Moaddian; Not Registered in Ofogh; No Official invoice; Delayed Original; No Corrective; Proforma Approval Delayed; Proxy (نیابتی) Not Submitted; Physical / Physical Requested; Other.  
- **Variety (8):** Low Product / Mobile / iPhone / Samsung / Xiaomi / Laptop / IT / Accessories variety.  
- **Other (8):** Platform Usability Issues; Product Information Incomplete; Registration Process Difficult; Process Slow/Unclear; Basket; B2E Old Platform; Survey No Impact; Other.  
- **Account Manager & Support (7):** Late Response; Delayed Processes; Issues Not Resolved; Lack of Follow-Up; Request for Assigned Sales Rep; Direct Purchase Preferred; Other.  
- **Payment & Settlement (7):** Credit Not Granted; No Credit Option; Request Installments; Request Deferred; Request Split Payment; Request COD; Other.  
- **Supply (5):** Low Stock; Out-of-Stock Error; Order Canceled – No Supply; Slow Fulfillment; Custom Order Required Complaint.  
- **After-ordering Services (5):** Delayed Refund; Return Issues; Lack of Communication; Poor Support; Canceled.  
- **Guarantee (4):** Unknown Provider; Incorrect Info; Expired; Other.  
- **DKP (1):** Order Submission with DKP.

---

### 8\. Business Health Check survey

**The Drive file is the call/outreach tracker, not the results.** It holds no survey answers or scores. Aggregate status of the 112 listed accounts:

| Channel | Accounts | Completed | No answer | Call later | Declined | Not yet called |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| Default (platform) | 57 | 18 | 12 | 1 | 0 | 26 |
| B2R-Reseller | 35 | 8 | 19 | 1 | 1 | 6 |
| B2R-Retailer | 20 | 1 | 7 | 1 | 0 | 11 |
| **Total** | **112** | **27** | **38** | **3** | **1** | **43** |

- Reach is low (27 of 112 completed). Retailers were the hardest to reach (1 of 20). One Reseller contact had left the company.  
- The results probably live in a separate form or sheet linked from the "Survey Link" column. **They were not available in the files provided.**

---

### 9\. Design implications

#### Search & PLP

- The Platform segment explicitly says "nothing comes up in search compared to the main site" (variety is 63% CSAT). Show **out-of-stock items in results with a "notify me / request quote" action** rather than hiding them, so the catalogue does not look empty.  
- Add strong **brand, model and category filters for mobiles** (iPhone, Samsung, Xiaomi), accessories, laptops and IT, where scarcity complaints concentrate.  
- Show **stock level or quantity available** on the PLP card. B2B buyers buy "instantly" and in quantity.  
- Give the Dovetail tag "Product Information Incomplete" a home on the PDP: warranty provider, specs and packaging.

#### Price

- Price is the \#1 detractor for the largest segment (59% CSAT; 66% of dissatisfied Default users also rate price ≤3). About 1 in 4 price comments benchmark against **Digikala B2C** and about 1 in 4 against named B2B competitors.  
- Make the **B2B advantage explicit**: tier or volume price vs consumer price, margin hint or "suggested resale price", and quantity breaks.  
- Never show a B2B price ≥ the B2C price without an explanation (e.g. "includes official invoice / VAT / warranty X").  
- Price volatility and price-list requests suggest a **downloadable or shareable price list** and **"price changed since you added to basket"** alerts.  
- **Custom price (قیمت سفارشی) flows:** customers dislike them ("we buy instantly"). Show a clear SLA (the requested target is under 1 hour), a status tracker and a notification when the price is ready.

#### Stock & supply

- Order cancellation for "no supply" after payment is a top trust breaker (Supply tags; Platform deck). Use **real-time availability at add-to-cart and checkout**, a reservation or hold, and an explicit "backorder / sourcing required" label with an ETA for B2E sourcing (تامین).  
- When an order is cancelled: instant notification, the reason, an **automatic refund with an ETA**, and one-tap re-order of alternatives.

#### Delivery promise

- Delivery is the top dissatisfaction driver for Retailer (75%), Reseller (59%) and B2E (51%). Delay is the \#1 delivery theme (44 of 65 Platform delivery comments). 1403 showed that **shipping-time notification** and **on-time vs promised date** are the drivers, not accuracy (which is fine).  
- Design a **specific, honest delivery promise**: date plus time window at checkout, live status, proactive delay alerts with a new ETA, and courier contact.  
- Show order-progress steps. "The site doesn't show order progress" is a recurring complaint.  
- **National-ID or stamp requirement at delivery:** state it upfront at checkout. Let the buyer **nominate an alternate receiver** (shop staff) and show the delivery-code SMS status. Shop owners are not always present.  
- Split shipments: show it per item and why (1403: 49% of dissatisfied B2E rated split shipments ≤3).

#### Payment & settlement

- For **Resellers, settlement terms are the \#1 comment theme (31%)**, ahead of price. Retailer settlement CSAT is 72% and Reseller 65%, dipping to 43% in Azar.  
- Surface settlement or credit terms (e.g. 7 / 20-day settlement requested) clearly in checkout.  
- Show cheque-clearing vs delivery timing. One complaint was a cheque cleared before goods arrived.  
- Support **split payment** (wallet or credit plus gateway in one purchase) and **COD** requests.

#### Credit

- Recurring requests across segments ("enable credit purchase", installments, deferred). Dovetail has "Credit Not Granted" and "No Credit Option" tags.  
- A **credit-line UX** is needed: eligibility check, limit and available balance in the header or checkout, due dates, and statement.  
- Make "promised credit" commitments trackable. One complaint was about credit promised but not given.

#### Invoice / tax (Moaddian)

- High CSAT for Platform (95%), but it is a "main cause" priority for Retailer, Reseller and B2E. The pain points are Moaddian or Ofogh registration delays and mismatches, missing official or corrective invoices, and slow proforma approval.  
- Design: an **invoice centre** per order with Moaddian registration status, a downloadable official PDF at order time, a corrective-invoice request, and proforma generation and approval tracking for B2E finance teams.

#### Post-order (cancellation, refund, returns)

- Refund delay and missing notifications are equal top themes (11 \+ 11 of 25).  
- Design: a **refund tracker with SLA**, push or SMS on every state change, a self-serve returns flow, and visible warranty-provider info.

#### Support

- Human support is the strongest satisfaction anchor (94–98%). Keep humans reachable and design *around* them.  
  - Show the **assigned sales rep or AM** in-app (contact, hours).  
  - Add callback scheduling.  
  - Show ticket status to avoid "line always busy / no follow-up".  
- B2E wants a bridge to the **finance team** and less dependence on the AM for DKP ordering. The DKP ordering score fell 16 points in Aban, and the "manual process" complaint recurs. Self-serve ordering, approval and tracking for organisations is a priority.

#### App / platform UX

- Comments mention bugs, slowness and missing order tracking. Dovetail has tags for "Platform Usability", "Registration Process Difficult" and "B2E Old Platform".  
- **KYC or onboarding** was rated well in 1403 (87%), but registration difficulty is tagged. Keep KYC progress transparent.  
- Prioritise performance and a clear order-status timeline.

#### Loyalty

- No loyalty touchpoint is measured. Customers say they stay for **settlement terms** rather than price ("we buy because of long settlement, otherwise prices are too high"), and the "Survey No Impact" tag signals low trust that feedback matters.  
- Loyalty levers for B2R are therefore **terms (credit or settlement), volume pricing and reliability**, not points.  
- Consider a "you said, we did" loop and tiered terms tied to purchase history. The Business Health Check effort points the same way: proactive relationship check-ins.

#### Segment-specific emphasis

- **Platform/Default:** price competitiveness plus catalogue depth and search.  
- **Reseller:** settlement and credit, delivery time, and invoices.  
- **Retailer:** delivery reliability, settlement, and price.  
- **B2E:** DKP ordering automation, sourcing transparency, finance and invoice workflows, and post-order communication.

---

### 10\. Caveats

- PDF text extraction scrambles some chart labels and truncates "key insight" paragraphs. Numbers above come from the PDFs only where they are unambiguous; otherwise they were recomputed from the datasets.  
- Keyword theme coding (§7b) is approximate. Report-coded counts (§7a) are authoritative but cover Platform only.  
- Small-n segments (Retailer, Reseller, B2E) are volatile month to month.  
- The segment definitions in §2 are inferred. Confirm them with the CX/BI owners.

---

## E. Research Plans (Google Drive) — Extraction

Source: 9 research plan documents in Google Drive (read-only extraction, 2026-10-19). All plans were authored by the DKB UX Research function (single UX researcher); personal names are omitted here. Numbers in quotes are copied from the source docs. All nine documents are **plans only**. None contains findings, results tables or "we found" language, so a results report has to be looked for separately in every case.

Platform key: **B2R** \= B2B electronics store for retailers/shops (b2b.digikala.com, formerly "CE"); **B2E** \= SME/company procurement; **Gold** \= B2B gold; **Internal** \= back-office tool.

| \# | Plan | Date (last updated) | Platform | Method | Results in doc? |
| :---- | :---- | :---- | :---- | :---- | :---- |
| 1 | Customer Activation Research Plan V1.2 | 2025-05-03 | B2R | In-depth interviews | No (plan only) |
| 2 | Homepage Comparative Usability Test V1.1 | 2025-05-27 | B2R (mobile) | Comparative moderated usability test | No |
| 3 | Loyalty: Customer Perceived Value | 2025-10-15 | B2R (Loyalty program) | Short phone interviews (laddering) | No |
| 4 | B2E Legal Customers Discovery | 2025-10-19 | B2E | On-site in-depth interviews | No |
| 5 | B2B Gold Customer Discovery | 2025-05-10 | Gold | Field interviews (snowball) | No |
| 6 | PLP-to-Shipping Drop-offs (Real-time) | 2025-09-17 | B2R (inferred: PLP/checkout, PostHog) | Real-time survey \+ phone interviews | No |
| 7 | Pricing Panel Usability Study | 2025-04-26 | Internal (pricing back-office for B2R) | Moderated team-based sessions | No |
| 8 | DKB Event (Tabriz) | 2025-11-08 | B2R (resellers/retailers) | Field observation \+ intercepts | No |
| 9 | Heuristic Evaluation, B2B Platform | 2025-06-29 | B2R (b2b.digikala.com) | Expert review (Nielsen 10\) | No |

---

### 1\. Customer Activation Research Plan (V1.2)

- **Date:** last updated 5/3/2025 (V1.0 reviewed April 26, 2025). Older V1/V1.1 skipped.  
- **Platform:** B2R (electronics retailers).  
- **Problem statement:** "Despite successful registrations, a significant portion of users do not transition into active customers." The study looks for the reasons behind "low activation rates".  
- **Background data/metrics (verbatim):**  
  - Registered-but-non-active population: "Total Number of Activate Customers: 3360". The label says "Activate" but it sits under the *Registered but Non-Active Users* section, so it is probably a label error.  
  - Active customers (who have purchased): "Total Number of Activate Customers: 94".  
  - Implied activation ratio: about 94 active against 3,360 registered non-active, i.e. roughly 2.7% of the combined base. **This is a derived figure.**  
  - Sample plans for non-active users at 90% confidence: Plan A 5% MoE → 252; **Plan B 7% MoE → 134 (Selected)**; Plan C 10% MoE → 67\.  
  - Sample plans for active users: A → 71, B → 57, C → 40\.  
  - Timeline for non-active Plan B: "135 | 11 | 34 | 13 | 4 | 3 Month". Assumes 4 interviews/day, 60 min each, 30 min of analysis per interview.  
- **Goal:** "identify the key barriers and motivators that impact customer activation and ongoing engagement".  
- **Objectives:**  
  1. Barriers that stop registered users from becoming active (concerns about a first purchase; supply, pricing, delivery and financial conditions; what would build trust).  
  2. Motivations of active customers (first-purchase triggers, repeat drivers, role of promotions, discounts and credit).  
  3. Retailers' operational and financial challenges (sourcing, logistics, inventory, economic fluctuation, cash flow, credit/loans, inflation hedging).  
  4. Trust, supplier selection and platform loyalty (switching reasons, flexible payment terms).  
  5. Growth intentions and the support retailers would need.  
- **Research questions (interview guide themes):**  
  - *Non-active users:* business context (end-users vs other retailers, share of business online); stock purchase decisions (bulk vs as-needed, planned vs spontaneous, purchases delayed by currency swings); supplier criteria (price, trust, delivery speed, payment terms); prior online sourcing and negative experiences; ideal delivery (speed vs cost); pricing strategy (competitor influence, low or negative margins); payment and financing terms; risk management (unsold stock; converting to USD, gold or crypto); impact of promotions; growth plans.  
  - *Active users:* first-purchase journey (what tipped the scale: price, trust or availability); how the experience has evolved; repeat-purchase triggers; **churn moments** ("Have you ever considered not ordering again?"); promotions and price increases; payment flexibility and credit; comparison with other suppliers.  
- **Hypotheses:** none stated explicitly. Implied drivers that the guide probes: price, trust, delivery, payment terms/credit, promotions, market and currency volatility.  
- **Segments/recruitment:**  
  - G1 *Registered but Non-Active* (High Priority). Simple random sampling, prioritising users "registered within the last 4 months (Dey 1403 – Farvardin 1404)", with over-recruitment as a contingency.  
  - G2 *Active Customers* ("Low Priority / On Hold").  
  - Tehran participants in person; other cities remote (Meet or phone).  
- **Method:** qualitative, semi-structured in-depth interviews of 60 minutes; thematic coding.  
- **Planned deliverables:** Insight Report; Activation Drivers & Barriers Summary; recommendations; stakeholder deck.  
- **Results report exists?** No. The document is a plan only, and the active-customer track is marked "On Hold".

### 2\. Homepage Comparative Usability Test (V1.1)

- **Date:** last updated 5/27/2025.  
- **Platform:** B2R, mobile homepage (current live version vs redesign on staging).  
- **Problem statement:** test whether the homepage redesign improves "Discoverability of content and products", "Navigation efficiency", "User engagement and satisfaction" and "Conversion-related behaviors (e.g., add to cart, interaction with personalized sections)". The plan describes the user base as "mobile-first".  
- **Background data/metrics:** no baseline metrics. Design numbers: "Total Users: 30 Participants", within-subjects, counterbalanced 15/15; sessions about 40 min.  
- **Objectives:**  
  1. Discoverability of content blocks (product lines, carousels, best-sellers, newest).  
  2. Behaviour around carousels.  
  3. Logged-in experience (tracking ongoing orders, reordering, relevance of personalisation).  
  4. Satisfaction and preference (which version feels more "usable, trustworthy, and professional").  
- **Tasks:**  
  1. Find a specific smartphone (e.g. Galaxy A15).  
  2. Find a discounted product via homepage promotions.  
  3. Find the "Mobile Accessories" category.  
  4. Track an active order.  
  5. Repeat a previous purchase.  
  6. Add to cart from the homepage.  
  7. Find warranty or business policy info.  
  8. Choose the preferred version.  
- **Metrics:** completion (Done / Fail / Done with help), time on task, clicks, search vs browse path, SEQ 1–7, carousel used Y/N, time to first click/tap, missteps, confirmation seen, satisfaction 1–7. Statistics: paired t-test, McNemar, Wilcoxon.  
- **Hypotheses / success criteria:** the redesign succeeds if users are faster (statistically significant), task success does not fall, satisfaction is higher and most users prefer the new design.  
- **Segments/recruitment:** "Recent Digikala B2B users (last 3 months)", "Tehran-based", "Familiarity with online B2B purchasing flows". Recruited through the user pool with incentives (mobile credit, coupon or gift card).  
- **Method:** in-person moderated comparative usability test (qualitative plus observational) on mobile; think-aloud; screen recording.  
- **Planned deliverables:** Comparative Usability Report, slide deck, launch-readiness recommendations.  
- **Results report exists?** No. Plan only.

### 3\. Loyalty Research: Customer Perceived Value of the New Loyalty Program

- **Date:** last updated 10/15/2025 (reviewed Sep 14, 2025).  
- **Platform:** B2R. "Loyalty — a tiered benefit program for B2B customers", pre-launch and confidential.  
- **Problem statement:** find which rewards and benefits "truly create value for customers and motivate them to continue purchasing through the online platform rather than shifting to offline or alternative channels."  
- **Background data/metrics (verbatim tier counts):** "Base | 369", "Bronze | 219", "Silver | 71", "Gold | 20", "Diamond | 6"; "Total | 681". The tiers actually sum to 685, a discrepancy in the source.  
  - Sample sizes: Base 30, Bronze 20, Silver 10, Gold 5, Diamond 3; Total 68\. Saturation-driven.  
  - Timeline: "Total Duration | 8 days".  
- **Objectives:**  
  1. Customer-perceived value ("What makes a customer feel recognized, respected, or valued?").  
  2. Appeal of potential rewards and the needs behind preferences (financial, practical, emotional).  
  3. Differences between tiers (Base vs mid vs high; what keeps high-tier customers engaged).  
- **Research questions / stimuli:** reactions to "voucher, gift card, credit increase, lotteries, memberships, travel gift, etc."  
- **Hypotheses (implicit analysis frame):** three "value clusters":  
  - Financial-driven (voucher, gift card, credit)  
  - Recognition-driven (exclusive support, appreciation)  
  - Experience-driven (travel gift, memberships)  
- **Segments/recruitment:** all active B2B customers assigned to a loyalty tier; random selection within each tier, with backup lists.  
- **Method:** 10–12 minute semi-structured phone interviews using laddering (Attribute → Consequence → Value); daily affinity clustering. Optional extension: an anonymous Instagram-story poll on reward types that does not mention the program.  
- **Planned deliverables:** cross-tier comparison and value clusters.  
- **Results report exists?** No. Plan only.

### 4\. B2E Legal Customers Discovery Research Plan

- **Date:** last updated 10/19/2025 (reviewed Oct 13, 2025).  
- **Platform:** B2E. Its insights "will directly inform Phase 2 development of the B2E platform".  
- **Problem statement:** design a buying experience that is "simpler, faster, and better aligned with real organizational workflows". The plan also asks "what digital maturity looks like among its enterprise clients, and what must change — in experience, trust, and workflow — to drive online adoption at scale."  
- **Background data/metrics:** "Total Population: \~250 active legal B2E customers"; "Sample Size: 20 participants"; interviews of about 45 minutes. Current purchases run through **account managers**, with coordination over phone, WhatsApp and email (from the guide).  
- **Objectives:**  
  - Map purchasing workflows.  
  - Find friction points from discovery through payment and after-sales.  
  - Understand online vs offline motivations, trust factors and barriers.  
  - Segment customers into archetypes ("traditional, hybrid, fully digital").  
  - Map decision structures: who initiates, approves and finalises purchases.  
  - Find unmet needs for Phase 2\.  
- **Research questions:**  
  - A. *Behaviour:* procurement triggers, frequency, product mix.  
  - B. *Decision & trust:* stakeholders (requesters, approvers, finance); how reliability, transparency and documentation such as "official invoices" are judged.  
  - C. *Barriers:* do these organisations buy online at all? Are the barriers organisational, procedural or perception-based?  
  - D. *Strategy:* gaps between DKB's offering and enterprise expectations; which value propositions would make online buying the default.  
  - The guide also asks about the current DKB process, the account-manager relationship, how product, price and stock information is received, and issues with order confirmation, invoicing and payment.  
- **Hypotheses:** the plan says it is "Focused on understanding experiences rather than validating hypotheses". The implied archetype hypothesis is traditional / hybrid / digitally mature.  
- **Segments/recruitment:** "Procurement officers, purchasing managers, or administrative buyers from companies currently registered as legal entities under both Digikala and Digikala Business". Purposeful sampling for diversity in company size, purchase volume and digital engagement level. Interviews on site at company offices.  
- **Method:** in-person, on-site semi-structured contextual interviews.  
- **Planned deliverables:** Behavioral Insight Report, Segmentation Framework, Journey & Workflow Maps, Barrier Analysis, Strategic Opportunity Deck, stakeholder summary.  
- **Results report exists?** No. Plan only. Note that the Project already holds `claude/b2e-phase1-raw-findings.md`, which may be the output of this study; cross-check before treating it as a gap.

### 5\. B2B Gold Customer Discovery Research Plan

- **Date:** last updated 5/10/2025 (reviewed April 26, 2025).  
- **Platform:** Gold (exploring a potential DKB entry into B2B melted gold, *ab shodeh*).  
- **Problem statement:** "This research is a foundational step to de-risking Digikala Business's potential entry into this space. Without it, product and GTM decisions will be speculative." The market is described as "informal networks, trust-based workflows, and analog behavior".  
- **Background data/metrics:** "Sample Size: Up to 30 Interview"; field interviews of 15–20 min. No market metrics.  
- **Objectives:**  
  - How retailers source, verify and circulate ab shodeh.  
  - Workflows and inventory turnover.  
  - Emotional and functional drivers of risk behaviour.  
  - How trust is built and lost.  
  - Resistance to change and digital behaviour.  
  - The group's language, rituals, norms and pain points.  
- **Research questions (A–I):**  
  - Supplier types (bonakdars, ab shodeh sellers, workshops).  
  - Procurement rhythm.  
  - Gatekeepers and referral dependencies.  
  - What trust looks like (purity consistency, payment terms, discretion).  
  - Role of elders and networks.  
  - Dispute resolution.  
  - Price volatility.  
  - "Why do many shop owners insist on converting cash to gold immediately?"  
  - "fardayi" (tomorrow's-price) pricing and gold-based accounting.  
  - How outsiders are filtered out.  
  - Perception of online gold platforms and "What failed in previous attempts?"  
  - "What minimum conditions must be met to even consider a platform?"  
  - Physical delivery vs *havaleh* (transfer order).  
  - Credit based on mutual trust.  
- **Hypotheses (implicit, from the planned Barrier Report):** "digital trust deficit, resistance to non-local actors, liquidity & volatility risks, and social proof requirements". Example draft UX guardrails: "transparency \> speed, verbal confirmation over UI".  
- **Segments/recruitment:** "Small to mid-sized gold retailers (street shops, not malls)", Tehran, snowball sampling from trusted referrals. The researcher's cover is a non-commercial academic thesis and no DKB pitching takes place.  
- **Method:** in-depth semi-structured field interviews.  
- **Planned deliverables:** 4 behavioural personas (sourcing logic, trust profile, tech openness), Workflow Map (trigger → quote → verification → transfer), Barrier Report, 8–10 UX principles, Opportunity Areas (onboarding, trust scaffolding, referral mechanics).  
- **Results report exists?** No. Plan only.

### 6\. Understanding PLP-to-Shipping Drop-offs (Real-time Approach)

- **Date:** last updated 9/17/2025 (reviewed Sep 14, 2025). The Drive title has a "- Copy" suffix.  
- **Platform:** B2R (inferred: PLP to checkout funnel, PostHog tracking).  
- **Problem statement:** "Despite significant traffic to the Product Listing Page (PLP), many users with clear purchase intent do not proceed to checkout."  
- **Background data/metrics:** no funnel numbers quoted.  
  - Selection rule: "PLP View ≥ 1", "No Checkout in the same session", "Session Duration \> 30s", "No items in cart".  
  - Targets: "150 Survey Per day"; interviews "10–12 participants / per day"; calls of 5–7 min; survey sent within 1 hour.  
- **Objectives:**  
  1. Discovery barriers (out-of-stock, navigation, filters, insufficient product information).  
  2. Comparison behaviour (leaving to compare price, options or delivery with competitors).  
  3. Improvement opportunities (promotions, personalisation, search).  
- **Hypotheses (implicit candidate causes):** stock availability, navigation and filters, missing product info, competitor price/delivery comparison, browsing rather than buying.  
- **Segments/recruitment:** behavioural cohort of high-intent PLP visitors who left with an empty cart. Automated through a PostHog cohort that updates hourly → n8n → MS Teams; survey via Epoll.  
- **Method:** mixed. Real-time intercept survey (quantitative) plus short phone interviews (qualitative).  
- **Planned deliverables:** Drop-off Drivers Report (% reasons), UX/Product recommendations.  
- **Results report exists?** No. Plan only; the automation setup time is left as "X Day".

### 7\. Pricing Panel Usability Study Plan

- **Date:** last updated 4/26/2025 (reviewed April 8, 2025).  
- **Platform:** Internal back-office Pricing Panel, used for market prices, competitor data, stock levels and final price-setting for the B2R catalogue.  
- **Problem statement:** uncover usability issues, judge whether features are useful, and improve "trust in system-generated suggestions, and overall decision-making efficiency."  
- **Background data/metrics:** "Total number: 9" participants. Departments: Operations, Field, Supply, Tele-sales. "Mix of frequent and occasional users", "Medium to advanced". Sessions of 60 min.  
- **Objectives / research questions:**  
  1. Which time ranges are used; live vs historical data; usefulness of price trends.  
  2. How DKB prices are compared with competitors: which competitors are trusted, which data points matter (min, max, average, seller name, update date), and the order of analysis.  
  3. Trust in system-suggested prices: accepted directly or validated manually, and which signals build confidence.  
  4. Search and filter mental model: brand, model or type first; missing filters.  
  5. Table clarity and completeness: missing or unnecessary columns; Excel export vs working in the panel; use of external sources; stock-level display.  
- **Hypotheses (implicit):** users export to Excel or check outside sources because the panel lacks data; filter order does not match mental models; users distrust suggested prices.  
- **Tasks:** find the price for "Samsung S24FE/Black"; check the suggested price for "iPhone 13/Black"; compare "Samsung S24 Ultra/Black" with competitors; find the live price for "Poco F6 Pro" (Field); yesterday's price for "Galaxy A55" (Supply); Excel export and import (Operations).  
- **Segments:** internal roles in Operations, Field, Supply and Tele-sales. These are personas for internal tools, not customers.  
- **Method:** moderated, team-based task walkthroughs with discussion (focus group plus think-aloud).  
- **Planned deliverables:** Insight Summary, team-segmented highlights, presentation.  
- **Results report exists?** No. Plan only.

### 8\. Research Plan: Digikala Business Event (Tabriz)

- **Date:** last updated 11/8/2025 (reviewed Nov 5, 2025).  
- **Platform:** B2R (mobile resellers and small electronics retailers; regional event).  
- **Problem statement:** capture "real customer perceptions, attitudes, and in-the-moment behaviors" and "usability or trust barriers they experience in real time" as attendees use the platform at the event (QR codes, bundles, discount codes).  
- **Background data/metrics:** none. Attendees are mostly existing customers who have registered and purchased. Intercepts last 1–3 min.  
- **Objectives:**  
  1. Perceptions of DKB among peers.  
  2. Reactions to offers, bundles and discount codes ("genuinely valuable or promotional formality?").  
  3. Live platform use: struggles with login, search, filters, comparison, checkout and discount codes; how often people ask for help.  
  4. How products and prices are evaluated (memory, peer advice or in-platform data).  
- **Hypotheses (pre-coded expected friction, written as anticipated quotes):**  
  - QR/login: "Which link should I tap?", "It's not opening\!"  
  - Search/filter: "Where's the search bar?", "Why isn't the brand filter working?"  
  - Comparison: "How much is it on other sites?", "Why are there so few photos?"  
  - Discount code: "Where do I enter the code?", "It says invalid\!", "It should just apply automatically."  
  - Performance: "Why is the site so slow?", "It kicked me out again\!"  
  - Discount scepticism: "Is this a real discount?", "There must be a condition."  
  - Peer talk: "They delivered late.", "Support isn't great.", "At least they give official invoices."  
- **Additional discussion guides (sub-segments):**  
  - *High-Value (Diamond / Reseller) customers:* what makes them feel "genuinely valued", how they define "a good business partner", and personal interaction vs price/process.  
  - *Offline Buyers:* barriers to switching online (habit, trust, payment flexibility, need for personal interaction).  
  - *Payment Preferences (Checks & Credit):* "one guarantee check to secure a credit limit" vs "separate checks for each purchase".  
- **Segments/recruitment:** active and previously active customers at the event; mobile resellers and small electronics retailers in Tabriz; opportunistic, non-probability sampling.  
- **Method:** qualitative field study (non-intrusive observation plus short intercepts).  
- **Planned deliverables:** Event Insight Summary Report, sentiment, pain points, immediate recommendations.  
- **Results report exists?** No. Plan only.

### 9\. Heuristic Evaluation Research Plan: B2B Platform

- **Date:** last updated 6/29/2025 (reviewed April 26, 2025).  
- **Platform:** B2R (live b2b.digikala.com). "Mobile-first approach, but Desktop version will also be evaluated."  
- **Problem statement:** identify and prioritise usability issues in core flows in order to "Reduce user confusion, errors, and drop-off points".  
- **Background data/metrics:** 4 internal evaluators listed (UX Researcher, Lead Product Designer, Product Designer, PM); the text says "three". Timeline "9h | Total". Success criteria: "At least 15 issues discovered", "5+ high-priority items identified".  
- **Research questions:**  
  - Do the flows support efficient task completion?  
  - Do structure and terminology match users' mental models?  
  - What kinds of problems exist (cognitive, visual, interaction)?  
  - Which issues cause drop-off?  
  - How can control, clarity and trust be improved?  
- **Scope (flows):**  
  - Product Purchase (PLP → cart → checkout → payment)  
  - Order Tracking (history, status, repeat order)  
  - **RFQ** (submit a request, view RFQ status)  
  - Login & Registration  
  - User Profile  
  - **Wallet & Payment Credit** (balance, recharge, use at checkout)  
- **Hypotheses / example issues in the template:** these may be illustrative rather than observed:  
  - "No message after adding item to cart"  
  - "No back button during payment"  
  - "Search icon placement changes between pages"  
  - "No breadcrumb"  
  - "No way to select multiple RFQs at once"  
  - "Too many banners on homepage"  
  - "'OTP expired' message just says 'Failed'"  
  - "No support contact visible on checkout page"  
- **Method:** expert review against Nielsen's 10 heuristics with severity 0–4 (frequency, impact, persistence); independent review followed by a consensus session; findings logged in FigJam.  
- **Results report exists?** Not in this document. Findings were to be logged in a FigJam board that is linked from the plan but was not read here. Check the board and any separate HE report.

---

### Segments & persona definitions found (consolidated)

#### B2R: electronics retailers and resellers (external)

| Segment | Definition / criteria from plans | Size data | Source |
| :---- | :---- | :---- | :---- |
| Registered, non-active retailer | Registered on B2R, never purchased; priority on registrations in the last 4 months (Dey 1403–Farvardin 1404\) | "3360" | Activation |
| Active retailer | Has made at least one purchase | "94" (May 2025\) | Activation |
| Recent mobile user | B2B users active in the last 3 months, Tehran, familiar with online B2B purchasing; mobile-first | n=30 test | Homepage |
| Loyalty tiers | Base / Bronze / Silver / Gold / Diamond | 369 / 219 / 71 / 20 / 6 ("681") | Loyalty |
| High-value (Diamond / Reseller) | Experienced market players; value respect, recognition, fairness, responsiveness, a good business partner | Diamond \= 6 | Tabriz, Loyalty |
| Mobile reseller / small electronics retailer (regional) | Existing customers outside Tehran (Tabriz) | not stated | Tabriz |
| Offline buyer | Customers who still prefer offline buying; barriers are habit, trust, payment flexibility and need for personal contact | not stated | Tabriz |
| High-intent PLP abandoner (behavioural) | PLP view ≥1, session \>30s, empty cart, no checkout | target 150 surveys/day | PLP drop-off |

Attributes that recur across retailer personas:

- Customer base: they sell to end-users and/or other retailers.  
- Buying style: bulk vs as-needed, planned vs spontaneous.  
- Sensitive to currency and price volatility; may hedge into USD, gold or crypto.  
- Rely on credit, checks or payment terms.  
- Respond strongly to promotions but are sceptical of them.  
- Compare prices with competitor sites.  
- Value official invoices.  
- Weigh delivery speed against cost.

#### B2E: legal entities (external)

- **Procurement representative:** procurement officer, purchasing manager or administrative buyer at a company registered as a legal entity on both Digikala and DKB. About 250 active legal B2E customers.  
- **Buying-centre roles:** requester, approver, finance.  
- **Hypothesised archetypes:**  
  - Traditional buyer  
  - Hybrid user  
  - Digitally mature / fully digital organisation  
- **Current channel:** account manager plus phone, WhatsApp or email.  
- **Key needs:** official invoices, internal rules, and approvals.

#### Gold (external, prospective)

- **Street-shop gold retailer:** small to mid-sized, not in malls, Tehran.  
- Sources ab shodeh from bonakdars, ab shodeh sellers and workshops.  
- Runs on trust and referral networks, converts cash to gold immediately, and uses fardayi pricing and gold-based accounting.  
- Works physically or through havaleh.  
- Low digital trust and resistance to non-local players.  
- The plan intends 4 behavioural personas built on sourcing logic, trust profile and tech openness.

#### Internal users

- **Pricing Panel users:**  
  - Operations: export/import Excel, push suggested prices live  
  - Field: live price lookup  
  - Supply: historical price vs supply decisions  
  - Tele-sales  
- **UX evaluators:** expert reviewers, not a persona.

### Known problems stated in plans

1. **Low activation:** a significant share of registrants never become active (about 94 active vs 3,360 non-active, May 2025).  
2. **PLP → checkout drop-off:** "many users with clear purchase intent do not proceed to checkout" despite significant PLP traffic.  
3. **Offline/channel leakage:** the loyalty program exists to keep customers buying online "rather than shifting to offline or alternative channels"; the Tabriz plan targets offline buyers.  
4. **B2E online adoption gap:** enterprise purchasing still runs through account managers and phone/WhatsApp/email; the plan aims to "drive online adoption at scale".  
5. **Homepage:** discoverability of carousels and promotions, category navigation, finding order tracking and reorder, visibility of add-to-cart confirmation, and policy/warranty info. These are the targets of the redesign.  
6. **Anticipated live-platform friction (Tabriz):**  
   - QR link and login failures  
   - Slow site and session drop-outs ("kicked me out")  
   - Search bar hard to find; brand filter not working  
   - Too few product photos  
   - Discount code entry/invalid code; expectation of auto-apply  
   - Scepticism about whether discounts are real  
   - Payment completion  
   - Late delivery and weak support  
7. **Heuristic template examples:** possible real issues to verify:  
   - No add-to-cart feedback  
   - No back option during payment  
   - Inconsistent search icon placement  
   - No breadcrumbs  
   - No RFQ multi-select  
   - Too many homepage banners  
   - Vague OTP error ("Failed")  
   - No help on checkout  
8. **Pricing Panel:** uncertain trust in suggested prices; possible dependence on Excel and external sources; filter order may not match users' mental models; stock display.  
9. **Market context:** currency volatility, cash-flow pressure, need for credit and checks, competitive price pressure, low or negative margins.  
10. **Gold:** digital trust deficit, resistance to non-local actors, liquidity and volatility risk, social-proof requirements; earlier online gold platforms failed.

### Research gaps (questions asked but no report found)

None of the nine documents contains results. Unless separate report files exist elsewhere in Drive, every study below is an open gap.

| Study | Key unanswered question(s) | Note |
| :---- | :---- | :---- |
| Customer Activation | Why don't registrants make a first purchase? What drives repeat orders and churn? | Active-customer track was "On Hold" |
| Homepage comparative test | Does the redesign beat the current homepage on time, success and preference? | Check whether the redesign shipped without the test |
| Loyalty perceived value | Which rewards matter for each tier? Financial, recognition or experience? | Program was pre-launch in Oct 2025 |
| B2E Legal Discovery | Workflows, decision roles, archetypes, barriers to going online | `claude/b2e-phase1-raw-findings.md` in the Project may partly cover this; verify |
| B2B Gold Discovery | Trust, sourcing workflow, minimum conditions for a platform | No personas or UX principles found |
| PLP drop-offs | % breakdown of drop-off reasons | Automation setup left as "X Day" |
| Pricing Panel | Trust in suggested prices, data and filter needs | Internal tool |
| Tabriz event | Live friction, discount-code issues, payment preference (single guarantee check vs per-order) |  |
| Heuristic Evaluation | Prioritised issue list with severities | Findings may live in the linked FigJam board; not read |

**Cross-cutting gaps (no plan covers these):**

- RFQ, wallet/credit and checkout flows with real users (only expert review).  
- Enterprise Portals (no plan at all).  
- Desktop usage.  
- Quantitative sizing of the B2E archetypes.  
- Post-launch measurement of the Loyalty program.