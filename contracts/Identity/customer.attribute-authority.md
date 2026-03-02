# Customer — Attribute Authority Matrix

- Entity: Customer
- Contract: contracts/identity/customer.md
- Version: v1.0
- Owner: Enterprise Data Product Lead
- Last Updated: YYYY-MM-DD

## Authority Rules (Customer)
- ECID is authoritative in the Identity Registry / MDM layer (if absent, use Core Banking until registry exists).
- Middle name is optional; absence is not an error unless required by a downstream use case.

| Attribute | Canonical Definition | Required? | Data Type | dSoR | eSoR | Allowed Enrichment? | Valid Values / Format | Structural Checks | Issue Codes | Notes |
|---|---|---:|---|---|---|---:|---|---|---|---|
| ECID | Enterprise Customer ID | Yes | string | Identity Registry | Identity Registry | No | UUID/string | unique, non-null | MISSING_REQUIRED, DUPLICATE_CANDIDATE | Primary key |
| First Name | Legal first name | Yes | string | Core Banking | Core Banking | No | letters/space | non-null, not numeric | MISSING_REQUIRED, FORMAT_INVALID |  |
| Middle Name | Legal middle name | No | string | CRM | CRM | No | letters/space | if present, valid chars | FORMAT_INVALID | Optional |
| Last Name | Legal last name | Yes | string | Core Banking | Core Banking | No | letters/space | non-null | MISSING_REQUIRED, FORMAT_INVALID |  |
| DOB | Date of birth | Yes | date | Core Banking | Core Banking | No | YYYY-MM-DD | plausible range | OUT_OF_RANGE, FORMAT_INVALID |  |
| Email | Primary email | No | string | CRM | CRM | Yes | RFC-like | valid format | FORMAT_INVALID | Customer-maintained |
| Phone | Primary phone | No | string | CRM | CRM | Yes | E.164 | valid format | FORMAT_INVALID |  |
