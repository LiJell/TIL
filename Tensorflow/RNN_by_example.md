# RNN by example in Python

## Using a Recurrent Neural Network to write Patent Abstracts

### Introduction

- LSTM cell의 특정 아키텍쳐에 대해서 모든것을 이해할 필요는 없다. 사람이 할 일이 아니다. LSTM이 뜻하는 것은 과거정보다 나중에 다시 reinfected될 수 있게 해주는 것이다.
- 데이터 사이언스 기슬울 배우는 가장 효율적인 방법은 **문제를 찾고 해결하는 것이다**

- Top-down approach: 다시 돌아가고 이론을 covering하기 전에 어떻게 구현해야하는지 배워보자
  - 내가 필요한 방법과 내가 언제 연구 컨셉으로 돌아야가 하는지 찾을줄 알아야한다. 어떤 프레임워크를 어떤 아이디어에 적용시킬지에 대한것들 등. 
  - 어떻게  Keras에서 recurrent neural network로 어떻게 글을 요약하는지 봐보자.

### Recurrent Neural Network

