# Repository naming

## Conventions

- **Use lowercase**  
Repository names should be in lowercase by default.  
**Exception**: Use the original case for names with widely recognized case-sensitive formatting, such as: 
    - `MetaGOflow`, 
    - `ROSKOGO` (e.g. in `observatory-ROSKOGO-crate`).  

- **Use Kebab case**  
Separate words of repository names with dashes (-), instead of underscores (_), spaces, or CamelCase.  
**Exception:** Dots (`.`) are allowed in domain-like constructs (e.g., GitHub suggests `emo-bon.github.io` as an entry point for `github.io` publications).  

- **Avoid use of plurals**  
Avoid use of trailing `s` in folder and repository names, as they don’t provide additional meaning — it's already clear that repositories can contain multiple items. 


## Types of repositories

| Repo suffix       | Type of Repo |
|-------------------|--------------|
| **\-crate**       | An actual RO-Crate holding data |
| **\-profile**     | An actual RO-Profile (a crate in its own right) that formally describes the layout/structure of the crates that declare conformance to it |
| **\-example**     | Indicative of playground nature of the repo. Can be combined with other suffixes (but should be the final one) |
| **\-docs**        | A larger body of self-contained documentation. Should probably have a reflecting page linking to it from the main website repo |