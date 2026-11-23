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
              <dd>데이터 라벨링 및 증강 학습, 식판 원근 변환 정규화 구현</dd>

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
                  급식 식판 영상 434장과 음식 305종을 화소 단위로 라벨링해 Mask R-CNN 객체 분할 학습 진행
                </li>
                <li>
                  회전 및 반전 데이터 증강과 5회차 학습을 거쳐 음식 검출 정확도 94%, 영역 IoU 0.94 달성
                </li>
                <li>
                  식사 후 양념이나 뼈가 넓이에 잡히지 않도록 잔반 클래스를 별도 라벨링해 검출 오차 차단
                </li>
                <li>
                  식판 꼭짓점 기준 원근 변환 정규화로 전후 위치를 맞춘 뒤 화소 비율로 넓이(cm²)와 섭취율 산출
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
                      식사 전후 사진의 촬영 거리와 기울기에 따라 픽셀 넓이가 달라져 정확한 섭취량 비교가 어려웠습니다.
                    </p>
                    <p>
                      Mask R-CNN으로 검출한 식판 외곽선에서 최소 외접 직사각형을 구해 꼭짓점 좌표를 추출했습니다.
                    </p>
                    <p>
                      추출한 꼭짓점 기준 호모그래피 원근 변환으로 식사 후 영상을 식사 전 위치와 일치시켜 해결했습니다.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="space-y-1">
                    <p className="font-medium text-gray-900">
                      기울어진 식판 인식률 저하 및 잔반 넓이 혼입 방지
                    </p>
                    <p>
                      초기 학습에서는 카메라 각도가 틀어진 영상의 인식률이 63%에 머물고 잔여물이 함께 검출되었습니다.
                    </p>
                    <p>
                      90도 회전 및 반전 증강 기법을 적용하고 잔반 클래스를 별도 라벨링해 재학습을 진행했습니다.
                    </p>
                    <p>
                      그 결과 최종 5회차 실험에서 음식 인식 정확도 94%, 영역 검출 정확도 IoU 0.94를 확보했습니다.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* 팀 협업 및 기술 공유 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">팀 협업 및 기술 공유</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  담당 교수님 총괄 아래 학부생 3인이 데이터 라벨링 및 증강, 네트워크 학습, 면적 계산으로 파트 분담
                </li>
                <li>
                  매주 수요일 정기 회의를 열어 한 주간 학습한 기술 원리와 작업 현안을 공유하며 모듈 간 이해도 조율
                </li>
                <li>
                  촬영 각도 오차 문제를 두고 수요일 회의에서 원인을 함께 논의해 식판 꼭짓점 기준 원근 변환으로 해결
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
              {/* Row 1: 가로형 2종 */}
              <div className="flex flex-col items-center">
                <div className="w-full h-64 bg-white rounded-lg shadow-md flex items-center justify-center p-2 overflow-hidden">
                  <ImgPrefixed
                    src="/Others/AI_Labeling.png"
                    alt="화소 단위 다각형 데이터 라벨링"
                    className="max-h-full w-auto object-contain"
                  />
                </div>
                <p className="mt-3 text-sm text-gray-700 text-center">
                  화소 단위 다각형(Polygon) 데이터 라벨링 (식판 434장, 음식 305종)
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-full h-64 bg-white rounded-lg shadow-md flex items-center justify-center p-2 overflow-hidden">
                  <ImgPrefixed
                    src="/Others/AI_Augment.png"
                    alt="데이터 증강 학습"
                    className="max-h-full w-auto object-contain"
                  />
                </div>
                <p className="mt-3 text-sm text-gray-700 text-center">
                  데이터 증강 학습 (회전 및 반전 적용으로 기울어진 식판 인식률 개선)
                </p>
              </div>

              {/* Row 2: 가로형 2종 */}
              <div className="flex flex-col items-center">
                <div className="w-full h-64 bg-white rounded-lg shadow-md flex items-center justify-center p-2 overflow-hidden">
                  <ImgPrefixed
                    src="/Others/AI1.png"
                    alt="Mask R-CNN 기반 식판 및 음식 객체 분할 인식 결과"
                    className="max-h-full w-auto object-contain"
                  />
                </div>
                <p className="mt-3 text-sm text-gray-700 text-center">
                  Mask R-CNN 기반 식판 및 음식 객체 분할 인식 결과
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-full h-64 bg-white rounded-lg shadow-md flex items-center justify-center p-2 overflow-hidden">
                  <ImgPrefixed
                    src="/Others/AI2.png"
                    alt="식판 꼭짓점 기준 호모그래피 원근 변환 정규화"
                    className="max-h-full w-auto object-contain"
                  />
                </div>
                <p className="mt-3 text-sm text-gray-700 text-center">
                  식판 꼭짓점 기준 호모그래피 원근 변환 정규화 (식사 전 / 기울어진 식사 후 / 정규화 후)
                </p>
              </div>

              {/* Row 3: 세로형 2종 가로 나란히 배치 */}
              <div className="flex flex-col items-center">
                <div className="w-full flex justify-center">
                  <ImgPrefixed
                    src="/Others/AI_TrayBox.png"
                    alt="식판 마스크 외곽선 검출 및 직사각형 꼭짓점 좌표 추출"
                    className="h-[440px] max-h-[460px] w-auto object-contain rounded-lg shadow-md bg-white"
                  />
                </div>
                <p className="mt-3 text-sm text-gray-700 text-center">
                  식판 마스크 외곽선 검출 및 직사각형 꼭짓점 좌표 추출
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-full flex justify-center">
                  <ImgPrefixed
                    src="/Others/AI_Janban.jpg"
                    alt="식사 후 잔반 별도 분류를 통한 잔여물 넓이 오차 제외"
                    className="h-[440px] max-h-[460px] w-auto object-contain rounded-lg shadow-md bg-white"
                  />
                </div>
                <p className="mt-3 text-sm text-gray-700 text-center">
                  식사 후 잔반 별도 분류를 통한 잔여물 넓이 오차 제외
                </p>
              </div>

              {/* Row 4: 결과 산출 이미지 */}
              <div className="sm:col-span-2 flex flex-col items-center pt-2">
                <ImgPrefixed
                  src="/Others/AI3.png"
                  alt="식판 대비 화소 비율을 통한 음식별 실제 넓이 산출"
                  className="rounded-lg shadow-md w-full max-w-md h-auto object-contain bg-white"
                />
                <p className="mt-3 text-sm text-gray-700 text-center">
                  식판 대비 화소 비율을 통한 음식별 실제 넓이(cm²) 산출
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
