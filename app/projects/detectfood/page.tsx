import ImgPrefixed from "../../../components/ImgPrefixed";

export default function DetectFoodPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 space-y-6">
      {/* 상단: 좌 이미지 / 우 정보 */}
      <section className="grid gap-8 md:grid-cols-2 items-stretch">
        <div className="rounded-xl overflow-hidden shadow-sm">
          <ImgPrefixed
            src="/Others/AI1.png"
            alt="음식 객체 인식 프로젝트 메인"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold underline decoration-blue-500 underline-offset-8">
              음식 객체 인식
            </h1>

            <dl className="grid grid-cols-[120px_1fr] gap-x-4 gap-y-6 text-gray-800 mt-8">
              <dt className="font-semibold text-gray-600">ROLE</dt>
              <dd>팀장 (일정 조율, 데이터 라벨링 및 증강 학습, 식판 원근 변환 정규화)</dd>

              <dt className="font-semibold text-gray-600">DURATION</dt>
              <dd>2022.07 ~ 2022.12</dd>

              <dt className="font-semibold text-gray-600">TEAM</dt>
              <dd>기업 연계 산학 팀 프로젝트 (3인)</dd>

              <dt className="font-semibold text-gray-600">TECH STACK</dt>
              <dd>Python, PyTorch, Detectron2 (Mask R-CNN)</dd>
            </dl>
          </div>
        </div>
      </section>

      {/* 하단 섹션: 풀블리드 배경 */}
      <section className="py-0">
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12 space-y-10">
            {/* 프로젝트 요약 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">프로젝트 요약</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  급식 식판 영상 434장, 음식 305종을 화소 단위로 라벨링하고 훈련셋과 검증셋을 8:2 비율로 분할해 Mask R-CNN 기반 객체 분할 학습 진행
                </li>
                <li>
                  회전(Rotation) 및 반전(Flip) 데이터 증강과 5회차 파라미터 조정을 거쳐 음식 검출 정확도를 1회차 32%에서 5회차 94%로, 영역 검출 정확도(IoU)를 0.52에서 0.94로 개선
                </li>
                <li>
                  식사 후 남은 양념이나 뼈 같은 잔여물이 음식 넓이에 포함되지 않도록 잔반(janban) 클래스를 별도 라벨링해 검출 오차 차단
                </li>
                <li>
                  검출된 식판 외곽선 꼭짓점을 추출하고 호모그래피 원근 변환 정규화를 적용해 식사 전후 식판 위치와 크기를 일치시킨 뒤 화소 비율로 실제 넓이(cm²)와 섭취 비율(%) 산출
                </li>
              </ul>
            </div>

            {/* 개발 문제 및 해결 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">개발 문제 및 해결</h2>
              <ul className="list-disc list-outside pl-5 space-y-4 text-gray-700">
                <li>
                  <div className="space-y-1">
                    <p className="font-medium text-gray-900">
                      식사 전후 촬영 위치와 각도 차이로 인한 음식 넓이 비교 오차 해결
                    </p>
                    <p>
                      식사 전과 식사 후 사진의 촬영 거리나 기울기에 따라 식판과 음식의 픽셀 넓이가 달라져 정확한 섭취량 비교가 어려웠습니다.
                    </p>
                    <p>
                      이를 해결하기 위해 Mask R-CNN으로 검출한 식판 마스크 외곽선에서 최소 외접 직사각형과 꼭짓점 좌표를 추출하고, 호모그래피(Homography) 원근 변환 매트릭스를 계산해 식사 후 영상의 식판 위치와 크기를 식사 전 영상과 일치시키도록 정규화했습니다.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="space-y-1">
                    <p className="font-medium text-gray-900">
                      기울어진 식판 인식률 저하 및 잔반 넓이 혼입 방지
                    </p>
                    <p>
                      초기 1~2회차 학습에서는 카메라 각도가 틀어진 영상에서 음식 인식 정확도가 최대 63% 수준에 머물렀고, 식사 후 소스나 잔여물이 음식 영역으로 함께 잡히는 문제가 있었습니다.
                    </p>
                    <p>
                      90도 회전 및 수직, 수평 반전 증강 기법을 적용하고 잔반 클래스를 별도 라벨링해 재학습한 결과, 최종 5회차 실험에서 음식 인식 정확도 94%, IoU 0.94를 확보했습니다.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* 팀 협업 및 일정 조율 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">팀 협업 및 일정 조율</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  초기 회의에서 팀원 3인의 역량과 관심 분야를 파악해 데이터 어노테이션 및 증강, 객체 인식 모델 학습, 식판 기준 좌표 정규화로 역할을 분담
                </li>
                <li>
                  주간 진행도 점검 중 촬영 각도와 거리 편차로 인해 추가 라벨링 부담이 급증하고 일정이 지연될 우려가 발생하자, 인력 재투입 대신 식판 꼭짓점 기준 좌표 정규화 파이프라인을 제안해 작업 부담을 줄이고 정확도를 확보
                </li>
                <li>
                  주간 피드백을 통해 지연 구간의 작업량을 유연하게 재배분하며 계획된 산학 연구 기간 내 모델 구현 완수
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 시각 자료 (풀블리드 gray-50) */}
      <section className="py-0">
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gray-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-3xl font-bold text-left mb-12">시각 자료</h2>

            {/* 2열 그리드 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* 아이템 1 */}
              <div className="flex flex-col items-center">
                <ImgPrefixed
                  src="/Others/AI_Labeling.png"
                  alt="화소 단위 다각형 데이터 라벨링"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                <p className="mt-3 text-sm text-gray-700 text-center">
                  화소 단위 다각형(Polygon) 데이터 라벨링 (식판 434장, 음식 305종)
                </p>
              </div>

              {/* 아이템 2 */}
              <div className="flex flex-col items-center">
                <ImgPrefixed
                  src="/Others/AI_Augment.png"
                  alt="데이터 증강 학습"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                <p className="mt-3 text-sm text-gray-700 text-center">
                  데이터 증강 학습 (회전 및 반전 적용으로 기울어진 식판 인식률 개선)
                </p>
              </div>

              {/* 아이템 3 */}
              <div className="flex flex-col items-center">
                <ImgPrefixed
                  src="/Others/AI1.png"
                  alt="Mask R-CNN 기반 식판 및 음식 객체 분할 인식 결과"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                <p className="mt-3 text-sm text-gray-700 text-center">
                  Mask R-CNN 기반 식판 및 음식 객체 분할 인식 결과
                </p>
              </div>

              {/* 아이템 4 */}
              <div className="flex flex-col items-center">
                <ImgPrefixed
                  src="/Others/AI_TrayBox.png"
                  alt="식판 마스크 외곽선 검출 및 직사각형 꼭짓점 좌표 추출"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                <p className="mt-3 text-sm text-gray-700 text-center">
                  식판 마스크 외곽선 검출 및 직사각형 꼭짓점 좌표 추출
                </p>
              </div>

              {/* 아이템 5 */}
              <div className="flex flex-col items-center">
                <ImgPrefixed
                  src="/Others/AI2.png"
                  alt="식판 꼭짓점 기준 호모그래피 원근 변환 정규화"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                <p className="mt-3 text-sm text-gray-700 text-center">
                  식판 꼭짓점 기준 호모그래피 원근 변환 정규화 (식사 전 / 기울어진 식사 후 / 정규화 후)
                </p>
              </div>

              {/* 아이템 6 */}
              <div className="flex flex-col items-center">
                <ImgPrefixed
                  src="/Others/AI3.png"
                  alt="식판 대비 화소 비율을 통한 음식별 실제 넓이 산출"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                <p className="mt-3 text-sm text-gray-700 text-center">
                  식판 대비 화소 비율을 통한 음식별 실제 넓이(cm²) 산출
                </p>
              </div>

              {/* 아이템 7 */}
              <div className="flex flex-col items-center">
                <ImgPrefixed
                  src="/Others/AI_Janban.jpg"
                  alt="식사 후 잔반 별도 분류를 통한 잔여물 넓이 오차 제외"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                <p className="mt-3 text-sm text-gray-700 text-center">
                  식사 후 잔반(janban) 별도 분류를 통한 잔여물 넓이 오차 제외
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
