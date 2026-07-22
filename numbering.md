---
aside: false
---

# HA sequencing numbering
Confusingly, HA protein sequences are numbered a variety of different ways in the literature.
There are historical reasons for these different numbering schemes (see [here](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4229193/) for a partial explanation).

For the plots shown on this website, site refers to **H3 numbering**, which numbers the H7 HA ectodomain in a way that puts its sites into correspondence with the H3 HA ectodomain.
Note that in many cases, mousing over points also shows their number in other numbering schemes.

Click [here for a file](https://github.com/dms-vep/Flu-H7-Anhui13-MHCII-binding/blob/master/data/site_numbering_map.csv)
that intra-converts between sequential H7 numbering and H3 numbering schemes (the sequence of H7 HA protein is [here](https://github.com/dms-vep/Flu-H7-Anhui13-MHCII-binding/blob/master/results/gene_sequence/protein.fasta)).
The different numbering schemes in that file are as follows:

 - *sequential_site*: sequential 1, 2, ... numbering of the [H7 HA protein](https://github.com/dms-vep/Flu-H7-Anhui13-MHCII-binding/blob/master/results/gene_sequence/protein.fasta) starting with 1 at the N-terminal methionine.
 - *reference_site*: numbering using the widely used H3 numbering scheme, which puts sites into alignment with the mature ectodomain of the H3 subtype HA. Because H3 was the first HA studied in detail using structural methods, this is the most widely used scheme and all of the interactive plots on this webpage use this numbering scheme for the default site number.
