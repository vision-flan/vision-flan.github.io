import glob
import csv
import json

outputs = []
for file_name in glob.glob('dataset_bibtex/*.csv'):
    with open(file_name, 'r') as fin:
        for line in csv.DictReader(fin):
            # print(line)
            dataset_name = line['dataset name'].split('+')[0]
            output = {
                "name": dataset_name,
                "url": line['url'],
                "bibtex": line['bibtex']
            }
            outputs.append(output)
with open('bibtex.json','w') as fout:
    json.dump(outputs, fout)
        
            