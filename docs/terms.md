# EMO-BON glossary 

## Physical concepts
| **Term** | **Definition** | |
|----------|-----------------|------|
| **Partner** | An EMO BON member, typically an institute but not exclusively. | 
| **Station** | An EMO BON Station. Stations may have multiple observatories, and each observatory can involve contributions from one or more partners. |
| **Observatory** | An EMO BON organisational unit, linked to a specific sample type (e.g. water column, soft sediment). While technically tied to the sample type, this distinction is often ignored in casual use since the observatory's base name (obs_id) remains the same. An observatory/organisational unit represents the location at which sampling events are caried out. |
| **Sampling event** | A sampling action performed at a particular observatroy and specific time, resulting in the collection of one or more samples. |
| **Material Sample** | Refers to both (1) a material sample collected during a sampling event and (2) the source material used for sequencing in bioinformatics, where it is no longer a physical sample but retains its unique sample ID.|

## Digital concepts
| **Term** | **Definition** | |
|----------|-----------------|-------|
| **Logsheet** | The spreadsheets in which the observatories write their sample and event data. The source spreadsheets are on the EMO BON googledrive. When they are harvested as CSV into EMOBON's GH space. The "transformed" logsheets are those that have been subjected to a date-range selection and a QC ||
| **EMO BON data** | Here we mean (1) the content of the logsheets, which are filled by the observatories to describe their collected samples, (2) sequences in ENA, (3) outputs from bioinformatics |
| **EMO BON metadata** | Here we mean the data that is used specifically to describe EMO BON data, that performs the function of allowing discovery, understanding, organising, cataloguing, etc. Metadata are recorded in the rocrate-metadata.json files, they are added to ENA (sample and experiment accessions) and in files in the EMO BON repos governance-data, sequencing-data, observatory-profile, among others. |
| **EMO BON record** | A digital representation of a sampling event, capturing the relevant data and metadata associated with it. There is no fixed idea of what is included in an EMO BON record, as that depends on the system that these records are being held in |
| **Catalogue asset** | The smallest unit of "EMOBON dataset" that goes into a datasets metadata catalogue. Can be a single data file or a set of files. |
| **EMO BON Repository** | A GitHub repository* that contains EMO BON data and metadata. | *A GitHub repository represents a storage location for files and their version histroy, managed using Git version control which allows users to track changes, collaborate with others, and maintain a complete record of the project's development over time. |
| **EMO BON RO-Crate** | An ro-crate* that contains data from EMO BON associated with one or more observatories. Usually this is a single repository, but it is also possible fora single repository to hold multiple ro-crates in the form of multiple rocrate-metadata.json files. | *An Ro-crate is a collection of data files, metadata, and contextual information that organizes research data in a structured format, enabling easy sharing, reuse, and understanding in both machine-readable and human-readable forms. |
| **EM BON ro-crate-metadata.json** | An rocrate-metadata.json file* that describes the contents of an EMO BON RO-Crate. | *An rocrate-metadata.json file is a JSON-LD file that provides a detailed description of the contents and structure of an RO-Crate. It maps relationships between files and their metadata, ensuring traceability, context, and purpose for data within research workflows.|
| **sequence** | A DNA string. Specifically, we mean (raw) sequences as produced from the samples by Genoscope and held on their cloud drive or as placed in ENA. |
| **processed sequences / OTUs / ASVs** | These are sequences that have been processed by a bioinformatics code to a stage where they can be/have been compared to taxonomic reference libraries. |
| **Stub** |||