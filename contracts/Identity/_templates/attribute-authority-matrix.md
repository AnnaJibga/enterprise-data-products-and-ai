# Attribute Authority Matrix — Template

Use this to define **Designated SoR (dSoR)** and **Effective SoR (eSoR)** per attribute.
This is a structural contract artifact. It sits upstream of certification and AI eligibility.

## Entity
- Entity: <Customer | Account | Policy | Transaction>
- Contract: <link to contracts/identity/<entity>.md>
- Version: <vX.Y>
- Owner: <Name/Role>
- Last Updated: <YYYY-MM-DD>

---

## Authority Rules (Global)
- dSoR is the system authorized to **originate/maintain** the attribute.
- eSoR is the system used for **consumption** when enrichment or transformations exist.
- If dSoR ≠ eSoR, **lineage and transformation rules must be explicit**.
- No attribute may have more than **one dSoR**.
- Conflicts default to: **dSoR wins**, unless an exception is documented.

---

## Attribute Authority Table

| Attribute | Canonical Definition | Required? | Data Type | dSoR | eSoR | Allowed Enrichment? | Valid Values / Format | Structural Checks | Issue Codes | Notes |
|---|---|---:|---|---|---|---:|---|---|---|---|
|  |  |  |  |  |  |  |  |  |  |  |

---

## Issue Codes (Standard)
- MISSING_REQUIRED
- FORMAT_INVALID
- CONFLICT_ACROSS_SYSTEMS
- DUPLICATE_CANDIDATE
- OUT_OF_RANGE
- UNKNOWN_AUTHORITY
- ENRICHMENT_VIOLATION
