# Medical Conversational Evidence Based Self-reflective Engine
Large language models (LLMs) have recently shown capabilities in answering conversational questions and generating human-like text, which led to interest in healthcare applications. Although not designed specifically for clinical use, it have the potential to transform healthcare delivery by improving documentation of patient reports, enhancing diagnostic accuracy, and supporting various clinical tasks.


# Screenshots
<img src="/assets/GUI-1.png" alt="graph" width="600"/>

<img src="/assets/GUI-2.png" alt="graph" width="600"/>

<img src="/assets/GUI-3.png" alt="graph" width="600"/>


# Content
#### [Setup](#setup)
#### [LLM](https://github.com/samehfrihat/Medical-Conversational-LLM/tree/main/lm#readme)
#### [Frontend](https://github.com/samehfrihat/Medical-Conversational-LLM/tree/main/client#readme)

# Setup & Installation

# Using Docker

## NVIDIA Container Toolkit

We need to install the NVIDIA Container Toolkit on the host os to allow docker use the gpu.

```
distribution=$(. /etc/os-release;echo $ID$VERSION_ID)
curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | sudo apt-key add -
curl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | sudo tee /etc/apt/sources.list.d/nvidia-docker.list
```

```
sudo apt-get update
```
```
sudo apt-get install -y nvidia-docker2
```

```
sudo systemctl restart docker
```

### Build Docker Image

```
docker build -t self-reflective .
```

## Run Docker Container
```
docker run -d --gpus all -p 8140:80 self-reflective
```

## Access the website
```
http://XX.XX.XX.XX:8140/
```


> Make sure to expose 8140 to accept incoming requests



## Manual Installation
```
conda env create -f environment.yml
conda activate self-reflective-llm
```

### Create embeddings
```
python create_medical_records_index.py
```

### Web Inference
```
./server.sh
```
### using gunicorn
```
./server.sh prod
```

### Test inference
```
python run.py
```

### Web client
requires node 16+
```
cd client
npm install
npm run dev --  --host
```
