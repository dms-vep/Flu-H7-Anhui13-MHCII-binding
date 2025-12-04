#!/bin/bash
#
#SBATCH -c 4 

snakemake \
    -j 4 \
    -s dms-vep-pipeline-3/Snakefile \
    --rerun-incomplete \
    --software-deployment-method conda
