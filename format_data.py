import json

inputs = json.load(open('/Users/zhiyangxu/Documents/multiinstructv2/vision-flan.github.io/tasks_web.json','r'))
""" 
{
        "id": "multiinstruct_ok_vqa_['train', 'val']_162419",
        "image": "./task_imgs/COCO_train2014_000000162419.jpg",
        "task_name": "ok_vqa",
        "conversations": [
            {
                "from": "human",
                "value": "What activity might these vehicles been used for?\n<image>"
            },
            {
                "from": "gpt",
                "value": "transportation"
            }
        ]
    }
{
        "instance_id": "recipe-qa+visual_coherence+3584",
        "img_path": "./imgs/recipe-qa+visual_coherence_974_recipe-qa+visual_coherence+3584.jpg",
        "options": null,
        "input_text": null,
        "raw_output": "The least similar image is B",
        "prompt": "The given image contains 4 image choices numbered A through D. Select the least similar image among the gorup",
        "target": "The least similar image is B",
        "dataset_name": "recipe-qa",
        "task_name": "recipe-qa+visual_coherence"
    }
"""
outputs = []
for line in inputs:
    output['instance_id'] =
    output['img_path'] =
    output['prompt'] =
    output['target'] =
    output['task_name'] =
    
    
     