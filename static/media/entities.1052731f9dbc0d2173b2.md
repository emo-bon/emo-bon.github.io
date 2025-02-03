List of all main entities created & referenced in our data flow:
1. [RO-Profiles](#ro-profiles)
2. [Crates](#crates)
   - [Observatory Crate](#observatory-crate)
   - [Analysis-Results Crate](#analysis-results-crate)
   - [Sequencing Crate](#sequencing-crate)
   - [Governance Crate](#governance-crate)
3. [Entities](#entities)
   - [Dataset](#dataset)
   - [Observatory](#observatory)
   - [Sample](#sample)
   - [Sampling Event](#sampling-event)
   - [Measurements/Observations](#measurementsobservations)
   - [Sequencing Run](#sequencing-run)
   - [Batch](#batch)
   - [Sequence](#sequence)
   - [Analysis Result](#analysis-result)

---
# RO-Profiles

#### Concept
RO-profiles encapsulate Research Object (RO) profiles that describe conformity to a fixed set of expectations for data structures. They ensure consistency in the way research data is formatted and provide practical assets such as templates, SHACL files, documentation, and other reference materials. (More information available at: [Ro Crate profiles](https://www.researchobject.org/ro-crate/specification/1.2-DRAFT/profiles.html))

#### URI Format
`https://data.embon.embrc.eu/{name}-profile/{version}`
- `{name}`: One of `observatory`, `sequencing`, `analysis-results`
- `{version}`: `latest` or a specific version vM.m.p. (e.g., `v1.0.0`)

#### Creation & Management
- Managed at: `https://github.com/emo-bon/{name}-profile`

#### References
- Used as metadata descriptors for crates that comply with specific profile expectations.

---
# Crates

### Concept
Crates are structured data packages that encapsulate various types of research data. They serve as containers for datasets, metadata, and other related information, ensuring consistency, traceability, and compliance with RO-profiles.

### Types
   1. [Governance Crate](#governance-crate)
   2. [Observatory Crate](#observatory-crate)
   3. [Analysis-Results Crate](#analysis-results-crate)
   4. [Sequencing Crate](#sequencing-crate)

Each type of crate has a unique URI structure, is created under specific workflows, and is referenced in corresponding research and administrative contexts.

## 1. Governance Crate
- **Concept**:  
Contains governance-related metadata and policies.
- **Creation & Management**:  
`https://github.com/emo-bon/governance-crate/`
- **URI Format**:  
`https://data.emobon.embrc.eu/governance-crate/`
- **References**:

## 2. Observatory Crate
- **Concept**:  
Represents an observatory and its associated datasets.
- **Creation & Management**:  
`https://github.com/emo-bon/observatory-{obsid}-crate/`
- **URI Format**:  
`https://data.emobon.embrc.eu/observatory-{obsid}-crate/`
- **References**:


## 3. Analysis-Results Crate
- **Concept**:  
Captures the results of data analysis processes.
- **Creation & Management**:
`https://github.com/emo-bon/analysis-results-{cluster}-crate/{genoscope-code}/`
- **URI Format**:  
`https://data.emobon.embrc.eu/analysis-results-{cluster}-crate/{genoscope-code}/`
- **References**:

## 4. Sequencing Crate
- **Concept**: Groups sequencing-related data for structured access.
- **Creation & Management**:
- **URI Format**: `https://data.emobon.embrc.eu/sequencing-crate/`
- **References**:


---

# Entities

### Dataset ?
- **Concept**: A curated collection of data, potentially with a persistent identifier and versioning.
- **Creation & Management**: Created when structured data is published for reuse.
- **URI Format**:
- **References**: 

### Observatory
- **Concept**:
- **Creation & Management**:  
`https://github.com/emo-bon/observatory-{obsid}-crate/`
- **URI Format**:  
`http://data.emobon.embrc.eu/observatory-{obsid}-crate/{env_package}/observatory/{obsid}`
  - `{obsid}`: ...
  - `{env_package}`: ...
- **References**: 

### Sample
- **Concept**: 
- **Creation & Management**:  
`https://github.com/emo-bon/observatory-{obsid}-crate/tree/main/{env_package}/sampling`
- **URI Format**:  
`http://data.emobon.embrc.eu/observatory-{obsid}-crate/{env_package}/measured/{EMOBON_BPNS_So_1}`
- **References**: 

### Sampling Event
- **Concept**: 
- **Creation & Management**:
`https://github.com/emo-bon/observatory-{obsid}-crate/tree/main/{env_package}/sampling` 
- **URI Format**:  
`http://data.emobon.embrc.eu/observatory-{obsid}-crate/{env_package}/sampling/{EMOBON_BPNS_So_1}`
- **References**: 

### Measurements/Observations
- **Concept**: 
- **Creation & Management**:  
`https://github.com/emo-bon/observatory-{obsid}-crate/tree/main/{env_package}/measured` 
- **URI Format**:  
`http://data.emobon.embrc.eu/observatory-{obsid}-crate/{env_package}/measured/{EMOBON_BPNS_So_1}#{observedProperty}`
- **References**:

### Sequencing Run
- **Concept**: 
- **Creation & Management**:
- **URI Format**: `https://data.emobon.embrc.eu/sequencing-run/{run-id}/`
- **References**: Found in sequencing crates and analysis workflows.

### Batch 
- **Concept**:
- **Creation & Management**:
- **URI Format**: `https://data.emobon.embrc.eu/batch/{batch-id}/`
- **References**: 

### Sequence
- **Concept**:
- **Creation & Management**:
- **URI Format**: `https://data.emobon.embrc.eu/sequence/{sequence-id}/`
- **References**: 

### Analysis Result
- **Concept**:
- **Creation & Management**:
- **URI Format**: `https://data.emobon.embrc.eu/analysis-result/{result-id}/`
- **References**: 