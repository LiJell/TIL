# Convnet Visualization

## Visualizing what convnets learn

- Deep Learning model as Blackbox 
- Convnet은 시각적인 개념을 학습한 것 → 시각화 하기 아주 좋음 
- 시각화에 유용한 기법 
  - 컨브넷 중간층의 출력(중간층에 있는 활성화)을 시각화 
  - 컨브넷 필터 시각화 
  - 클래스 활성화에 대한 히트맵(heatmap)을 이미지에 시각화

#### Visualizing Intermediate activations

- 어떤 입력이 주어졌을 때 네트워크에 있는 여러 합성곱과 풀링층이 출력하는 특성맵을 그 리는 것 
- 네트워크에 의해 학습된 필터들이 어떻게 입력을 분해하는지 보여줌 
- 넓이, 높이, 깊이(채널) 3개의 차원에 대해 특성맵을 시각화하는 것이 좋음 
- 각 채널은 비교적 독립적 특성을 인코딩하므로 특성맵의 각 채널 내용을 독립적인 2D 이미 지로 그림