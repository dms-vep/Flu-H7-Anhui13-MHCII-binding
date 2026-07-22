# Pseudovirus deep mutatioinal scanning of HA from A/Anhui/1/2013 (H7N9) for entry and binding to tufted duck MHC-II

See [Dadonaite et al (2026)](https://doi.org/10.64898/2026.07.17.738765) for details on this study.

This repository has the code and data. Specifically:

 - For interactive plots visualizing key results, see [https://dms-vep.org/Flu-H7-Anhui13-MHCII-binding/](https://dms-vep.org/Flu-H7-Anhui13-MHCII-binding/)
 - For a single CSV with the QC-ed measurements, see [results/summaries/tufted_duck_MHCII_binding.csv](results/summaries/tufted_duck_MHCII_binding.csv)
 - For all numerical results, see [./results/](results)

## Organization of this repo

### `dms-vep-pipeline-3` submodule

Most of the analysis is done by the [dms-vep-pipeline-3](https://github.com/dms-vep/dms-vep-pipeline-3), which was added as a [git submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules) to this pipeline via:

    git submodule add https://github.com/dms-vep/dms-vep-pipeline-3

This added the file [.gitmodules](.gitmodules) and the submodule [dms-vep-pipeline-3](https://github.com/dms-vep/dms-vep-pipeline-3), which was then committed to the repo.
Note that if you want a specific commit or tag of [dms-vep-pipeline-3](https://github.com/dms-vep/dms-vep-pipeline-3) or to update to a new commit, follow the [steps here](https://stackoverflow.com/a/10916398), basically:

    cd dms-vep-pipeline-3
    git checkout <commit>

and then `cd ../` back to the top-level directory, and add and commit the updated `dms-vep-pipeline-3` submodule.
You can also make changes to the [dms-vep-pipeline-3](https://github.com/dms-vep/dms-vep-pipeline-3) that you commit back to that repo.

### Additional custom rules
Additional custom rules outside the standard pipeline are defined in [custom_rules.smk](custom_rules.smk).

### Additional analyses
[./analysis_notebooks/](analysis_notebooks) contain notebooks that are run manually outside the main pipeline.

### Code and configuration
The [snakemake](https://snakemake.readthedocs.io/) pipeline itself is run by `dms-vep-pipeline-3/Snakefile` which reads its configuration from [config.yaml](config.yaml).
The [conda](https://docs.conda.io/) environment used by the pipeline is that specified in the `environment.yml` file in [dms-vep-pipeline-3](https://github.com/dms-vep/dms-vep-pipeline-3).

### Data
Input data utilized by the pipeline are located in [./data/](data).
DMS library mutation-barcode linkage tables are taken from Anhui13 (H7N9) deep mutational scanning library [repo](https://dms-vep.org/Flu_H7_Anhui13_DMS/).   

### Results and documentation
The results of running the pipeline are placed in [./results/](results).
Due to space, only some results are tracked. For those that are not, see the [.gitignore](.gitignore) document.

The pipeline builds HTML documentation for the pipeline in `./results/docs` and `./results/published_docs`.
To visualize these docs via GitHub Pages, run:

    dms-vep-pipeline-3/publish_docs_gh-pages.sh

This pushes the docs to the *gh-pages* branch, we can be viewed on GitHub Pages at [https://dms-vep.org/Flu-H7-Anhui13-MHCII-binding/](https://dms-vep.org/Flu-H7-Anhui13-MHCII-binding/).

## Running the pipeline
To run the pipeline, build the conda environment `dms-vep-pipeline-3` in the `environment.yml` file of [dms-vep-pipeline-3](https://github.com/dms-vep/dms-vep-pipeline-3), activate it, and run [snakemake](https://snakemake.readthedocs.io/), such as:

    conda activate dms-vep-pipeline-3
    snakemake -j 8 --software-deployment-method conda -s dms-vep-pipeline-3/Snakefile

To run on the Hutch cluster via [slurm](https://slurm.schedmd.com/), you can run the file [run_Hutch_cluster.bash](run_Hutch_cluster.bash):

    sbatch run_Hutch_cluster.bash
