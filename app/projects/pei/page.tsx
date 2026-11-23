import ImgPrefixed from "../../../components/ImgPrefixed";

export default function PEIPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 space-y-6">
      {/* 상단: 좌 이미지 / 우 정보 */}
      <section className="grid gap-8 md:grid-cols-2 items-stretch">
        <div className="rounded-xl overflow-hidden shadow-sm">
          <ImgPrefixed
            src="/Others/PEI1.png"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold underline decoration-blue-500 underline-offset-8">
              Portable Electronic Instrumental
            </h1>

            <dl className="grid grid-cols-[120px_1fr] gap-x-4 gap-y-6 text-gray-800 mt-8">
              <dt className="font-semibold text-gray-600">ROLE</dt>
              <dd>회로 구성, 3D 모델링, 출력제어</dd>

              <dt className="font-semibold text-gray-600">DURATION</dt>
              <dd>2022.04 ~ 2022.06</dd>

              <dt className="font-semibold text-gray-600">TEAM</dt>
              <dd>개인 프로젝트</dd>

              <dt className="font-semibold text-gray-600">TECH STACK</dt>
              <dd>Python, Raspberry Pi OS</dd>
            </dl>
          </div>
        </div>
      </section>

      {/* 하단 섹션: 풀블리드 배경 */}
      <section className="py-0">
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12 space-y-10">
            {/* 설계 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">아이디어 스케치</h2>
              <div className="flex flex-col items-center">
                <ImgPrefixed
                  src="/Others/PEI4.png"
                  className="rounded-lg shadow-md h-auto object-cover"
                />
              </div>
            </div>

            {/* 프로젝트 요약 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">프로젝트 요약</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  2022년도 한국멀티미디어학회 춘계학술대회 학부생 포스터 논문 발표 부문 우수논문발표상 수상 (임베디드 시스템을 이용한 휴대용 전자식 악기 구현, 2022.05)
                </li>
                <li>악기는 Micro 5Pin을 통하여 충전할 수 있다.</li>
                <li>
                  상부 버튼을 통해 악기 변경이 가능하며 피아노, 기타, 드럼,
                  하프, 오르골 순으로 소리를 출력한다.
                </li>
                <li>
                  측면 버튼과 상부 버튼을 조합하여 음정을 출력할 수 있다.
                </li>
                <li>전원 버튼을 통해 장치를 제어할 수 있다.</li>
              </ul>
            </div>

            {/* 개발 문제 및 해결 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">개발 문제 및 해결</h2>
              <ul className="list-disc list-outside pl-5 space-y-2">
                <li>
                  <div>
                    <p>입력장치의 동시입력시 인식에 문제가 발생하였다.</p>
                    <p>
                      해당 문제는 Pygame 라이브러리를 사용하여 입력대기상태를
                      병렬처리가 가능하게 만들고 인식된 값을 취합하여 처리를
                      진행 하였다.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* 영상 */}
            <h2 className="text-2xl font-semibold mb-4">영상 자료</h2>
            <div className="flex justify-center">
              <div className="w-full max-w-3xl aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/RM-9EnQxCyQ?si=2D1d9zIPRqtBRZgZ"
                  title="YouTube video player"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full rounded-lg shadow"
                />
              </div>
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
                  src="/Others/PEI2.png"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                <p className="mt-3 text-sm text-gray-700 text-center">
                  하드웨어 3D 모델링
                </p>
              </div>

              {/* 아이템 2 */}
              <div className="flex flex-col items-center">
                <ImgPrefixed
                  src="/Others/PEI3.png"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                <p className="mt-3 text-sm text-gray-700 text-center">
                  실제 회로 구성
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
