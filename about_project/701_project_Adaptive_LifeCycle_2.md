# 7. Adaptive Life Cycle II

- 애자일 라이프 사이클(Agile Life Cycle)의 특징
- Iteration-Based Agile vs. Flow-Based Agile

## 7.1. 애자일 라이프 사이클

= Adaptive Life Cycle

= Change-driven Life Cycle

= Iterative and Incremental Life Cycle

= **Iteration + Increment**

= **Scrum**

= Progressive Elaboration

![image-20220214230815923](image.assets/image-20220214230815923.png)

- 애자일 라이프 사이클은 반복과 증분에 따라 프로젝트를 점진적 상세화하는 것을 의미함

- 반복 = 표준 프로세스 = 단계(Step, Stage, Phase)

  - 제품 개발을 위한 프로젝트 단계를 개발함(가로로 프로세스 적용)
  - 반복 프로세스의 마지막 작업인 인도(Delivery) 전에 산출물이 완성되어야 함

- 증분 = 점증 = Build = Version

  - 작은 사이클을 반복하여 최소 기능 제품(MVP: Minimum Viable Product)을 진화시켜 나가는 과정

    - 애자일 라이프 사이클을 프로젝트에 적용하면 MVP를 일찍 받아 볼 수 있으며, 피드백을 통해서 더 훌륭한 모습으로 다음 제품을 만들 수 있음
    - 애자일 라이프 사이클은 증분 기간이 짧고 계속 진화하여 나감

  - 제품의 기능을 추가하거나 보완함 (세로로 프로세스 적용)

  - 증분에 의해 프로젝트를 지속해 나감

    - 프로젝트 초기에 상위 수준의 범위가 명확하지만, 상세한 범위는 증분을 반복하면서 구체화됨
    - 현재의 증분에서 다르지 않는 산출물은 상위 수준에서 다루거나 미래의 증분N에 잠정적으로 배분함

    

#### 7.1.1. 예측형 vs. 애자일

- 예측형 라이프 사이클 = Waterfall Model
  - Analysis: 무엇을 만들 것인지 이해
  - Design: 어떻게 만들지 검토
  - Development: 실체 소프트웨어 작성
  - Test: 만든 것을 확인하고 검증
- 애자일 라이프 사이클 = Adaptive Life Cycle
  - Increment 1: 최소한의 핵심 기능을 개발
  - Increment 2: 증분1이 발전 -> 사용자의 관심과 우선순위가 높은 기능을 개발
  - Increment 3: 증분2가 발전 -> 그 다음 우선순위가 높은 기능을 집중 개발
  - Increment 4: 증분 3이 발전 -> 남은 기능을 개발
  - Increment N
    - Risk 관리와 Fast Delivery를 위해 적극적인 피드백 수용 필요
  - Increment
    -  Theme
      - EPIC
      - EW
      - CPW



#### 7.1.2. 애자일 라이프 사이클의 목표

- 반복의 가치 실현
  - **프로젝트 범위의 변경을 관리하여 불확실성을 줄임**
  - 다영한 프로세스를 활용함
  - Sprint = Iteration
- 증분의 가치 실현
  - 여러 번의 인도와 피드백을 통한 고객 가치를 제공함
  - MVP와 사업적 가치에 도움이 되는 중요한 것부터 먼저 하며, 빠르게 인도함
  - 불필요한 개발로 인한 낭비를 줄일 수 있으며 원가 절감을 할 수 있음



#### 7.1.3. 애자일 라이프 사이클을 위한 방법론

- 스크럼
  - 반복과 증분에 따라 개발 일정을 진행함
- 칸반 (Kanban)
  - 스프린트 내에서의 계획과 진행 상황을 시각화하고 종합적인 관점에서 프로젝트 현황을 분석함
- 익스트림 프로그래밍(eXtreme Programming)
  - 개발자가 주도하여 범위를 결정하고 개발을 진행, 창의적으로 문제를 해결하는 다양한 기법을  실천함



#### 7.1.4. 애자일 라이프 사이클의 특징

- 빠르고(Agile), 반복적이며(Iterative) 또는 점증적(Incremental)임
- 제품의 부분적 인도에 대한 대가가 있을 때 필요한 개바 ㄹ모델임
- 애자일 라이프 사이클에서는 반복을 시작하기 전에 자세한 범위를 정의하고 승인해야 함
  - The detailed scope is defined and approved before the start of an iteration
- **일단 반복 프로세스를 착수하면 범위에 대한 변경을 엄격하게 통제해야함**
  - **Changes to the scope of an iteration are carefully managed once work begins**
- **증분의 수가 많고 병행 개발이 빈번하게 이루어지면, 관리가 어려워지고 증분 활동 간의 조율에 많은 노력이 필요함**

- 제품의 불확실성을 줄이고 우선 순위가 높은 증분을 먼저 개발하는 방식의 단계를 제시해야 함
- 스프린트를 설정하고 반복에 따라 각 증분을 개발하고 인도함



#### 7.1.5. Iteration-Based Agile vs. Flow-Based Agile

- 반복 기반 애자일 라이프 사이클

  - Iteration-Based Agile 라이프 사이클은 표준 프로세스를 주기적은 Time Box 내에서 진행하는 것을 의미
  - Increment(또는 Sprint) 목표를 제시하고, 각 Increment 내에서 표준 프로세스 계획을 수립함
  - Time Box, 즉 보고 주기를 2주로 하기로 했다면, Time Box 마지막 시점에 중간 산출물을 인도하는 것을 원칙으로 함

  ![image-20220214233535281](image.assets/image-20220214233535281.png)

- 플로우 기반 애자일 라이프 사이클

  - Flow-Based Agile 라이프 사이클은 요구사항에 따라서 **Time Box를 각각 다르게 설정**함
  - 요구사항의 구현을 위하여 높은 창의력이 필요하거나 리스크 대응이 필요하면 Time Box를 길게 잡을 수도 있음
  - Flow-Based Agile 라이프 사이클에서는 Time Box가 과도하게 길어지는 것을 막기 위해 WIP(Work In Progress) Limit을 설정함
    - WIP Limit의 의미
      - 진행 중인 작업의 개수를 제한하는 것. 할 수 있는 작업의 최대 개수
      - 우선순위가 높은 작업들을 먼저 Task Board(Kanban)에 등록함
      - WIP Limit 개수를 넘어서면, 해당 워크플로우에 작업을 추가할 수 없음
    - WIP Limit의 목적 -> Multi-tasking 지양
    - WIP Limit의 예
      - Ready의 WIP Limit: 8ro
      - Development and unit test의 WIP Limit : 3개
      - User Acceptance Test의 WIP Limit: 2개

  ![image-20220214233721877](image.assets/image-20220214233721877.png)



## Key Point

- Agile Life Cycle
  - 애자일 라이프 사이클은 반복과 증분에 프로젝트를 실행합니다
  - 증분은 작은 사이클을 반복하여 "최소 기능 제품"(MVP: Minimum Viable Product)을 진화시켜 나가는 과정입니다.
- Agile Life Cycle의 종류
  - Iteration-Based와 Flow-Based 두가지
  - Iteration-Based는 표준 프로세스를 주기적인 Time Box 내에서 진행하는 것을 의미
  - Flow-Based는 요구사항에 따라서 Time Box를 각각 다르게 설정하며, Time Box가 과도하게 길어지는 것을 막기 위해서 WIP Limit을 설정