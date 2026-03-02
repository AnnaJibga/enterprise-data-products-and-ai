# Customer Tier 1 Rules

Source contract:
- contracts/identity/customer.md
- contracts/identity/customer.attribute-authority.md

## Inputs Required
- All discovered Customer datasets across systems (Core Banking, CRM, MDM/Registry, etc.)
- Record linkage keys (ECID if present, else matching inputs)

## Tier 1 Rule Set (Customer)

### Rule CUST-001: Primary Key Present
- ECID must be present OR a deterministic linkage key must exist
- If multiple ECIDs map to same person → DUPLICATE_CANDIDATE (Tier 3)

### Rule CUST-002: Required Attributes Present
Required: First Name, Last Name, DOB (per contract)
- Missing → MISSING_REQUIRED (Tier 3 if any required missing)

### Rule CUST-003: Format Validations
- DOB in YYYY-MM-DD and plausible range → else FORMAT_INVALID / OUT_OF_RANGE
- Names must not be numeric, must be non-empty

### Rule CUST-004: Authority Consistency
Compare attribute value in dSoR vs other systems:
- If mismatch for a dSoR-controlled attribute (e.g., DOB) → CONFLICT_ACROSS_SYSTEMS (Tier 2)
- If mismatch for ECID mapping → KEY_MISMATCH (Tier 3)

### Rule CUST-005: Middle Name Handling
- Middle name missing is NOT an issue
- If present in one system and absent in another → note as informational unless a use case flags it

### Rule CUST-006: Produce “Best Known Customer”
- For each attribute, select:
  1) dSoR value if present and valid
  2) else next best valid value with provenance
- Output must include provenance per attribute (system + timestamp where possible)

## Tier Mapping
- Tier 1: passes CUST-001..006 with no Tier-3 conditions and no open conflicts
- Tier 2: conflicts exist but identity keys stable and required fields present
- Tier 3: missing required OR ambiguous identity OR key mismatch

