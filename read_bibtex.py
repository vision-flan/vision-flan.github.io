import glob
import csv
import json

outputs = []
for file_name in glob.glob('dataset_bibtex/*.csv'):
    with open(file_name, 'r') as fin:
        print(file_name)
        for line in csv.DictReader(fin):
            dataset_name = line['dataset name'].split('+')[0]
            output = {
                "name": dataset_name,
                "url": line['url'],
                "bibtex": line['bibtex']
            }
            outputs.append(output)
print(len(outputs))
with open('bibtex.json','w') as fout:
    json.dump(outputs, fout)
        
            