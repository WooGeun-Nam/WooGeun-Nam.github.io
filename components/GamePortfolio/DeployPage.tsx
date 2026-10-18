"use client";

import React, { useState } from "react";

interface DeployPageProps {
  onTabChange: (tab: "deploy" | "plan" | "tech" | "devlog") => void;
}

const DeployPage: React.FC<DeployPageProps> = ({ onTabChange }) => {
  const [selectedVersion, setSelectedVersion] = useState("v0.2.4-beta");

  const renderPatchNote = () => {
    switch (selectedVersion) {
      case "v0.2.4-beta":
        return (
          <div className="p-4 bg-gray-100 rounded mb-6">
            <div className="grid grid-cols-2 items-center mb-4">
              <p className="font-semibold text-lg">Beta Test Build (v0.2.4)</p>
              <div className="flex justify-end">
                <a
                  href="https://drive.google.com/file/d/1f3eNnKfts_eKnNyIHo1nAcWxsLohogxM/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
                >
                  다운로드
                </a>
              </div>
            </div>
            <p className="text-xs text-gray-600 mb-4">
              ※ 이전 버전의 저장 데이터와 호환 합니다.
            </p>

            <h4 className="font-semibold mb-2">무한모드</h4>
            <ul className="list-disc pl-5 text-sm mb-4 space-y-1">
              <li>기존모드의 100 난이도 클리어 시 개방</li>
              <li>최종 웨이브가 존재하지 않는다.</li>
              <li>웨이브당 제한시간이 존재한다 (2분)</li>
              <li>적이 죽지 않고 최종위치에 도착하면, 시작위치로 순환한다.</li>
              <li>제한시간 안에 남은 적이 0이 되면 웨이브 클리어</li>
              <li>제한시간 안에 남은 적이 있다면 적 한개당 HP가 1 감소한다.</li>
              <li>체력이 0이하가 되어 게임이 종료되면 최종점수를 정산한다.</li>
              <li>무한모드는 상위표가 존재하며 최종점수를 기준으로 등록가능</li>
              <li>상위 10명의 점수표를 타이틀 화면에서 확인할 수 있다.</li>
              <li>우측상단의 버튼을 이용해 데미지 분석 사용 가능</li>
            </ul>
            <h4 className="font-semibold mb-2">추가</h4>
            <ul className="list-disc pl-5 text-sm mb-4 space-y-1">
              <li>사막 맵 추가</li>
              <li>용암 맵 추가</li>
              <li>인게임 실시간 점수 표기 추가</li>
              <li>게임속도 전환 단축키 추가 : Q</li>
              <li>인게임 단축키 설명 패널 추가</li>
              <li>중복장비 보상 RCoin 지급 기능 추가</li>
              <li>타이틀화면 상점/순위표 추가</li>
              <li>
                상점 : RCoin 을 이용하여 장비뽑기를 할 수 있습니다. (고정확률)
              </li>
              <li>순위표 : 무한모드 의 글로벌 순위표를 확인할 수 있습니다.</li>
            </ul>
            <h4 className="font-semibold mb-2">밸런스</h4>
            <ul className="list-disc pl-5 text-sm mb-4 space-y-1">
              <li>
                <b>타워 밸런스 조정 : </b>
                궁수 타워 하향, 창 타워 상향
              </li>
              <li>무기 장비 옵션 재설정</li>
              <li>장비 공격 사거리 옵션 하향</li>
              <li>
                웨이브 랜덤 보상 : 물리/마법 업그레이드 상향 (10웨이브 마다
                수치증가)
              </li>
              <li>타워형 스킬 상향 : 복수의 화신, 기본타워스킬</li>
            </ul>
            <h4 className="font-semibold mb-2">수정 및 개선</h4>
            <ul className="list-disc pl-5 text-sm mb-4 space-y-1">
              <li>
                <b>툴팁 관련 개선 : </b>일부 장신구 툴팁 개선(관련 효과 실시간
                표기), 궁수 타워 툴팁 개선
              </li>
              <li>
                <b>소리 관련 개선 : </b>일부 소리 누락문제 개선, 기능별 신규
                사운드 추가
              </li>
              <li>UI 전환속도 개선</li>
              <li>타워/스킬 전환 버그 수정</li>
              <li>전설급 장비 이미지 수정</li>
              <li>해상도에 따른 UI문제 개선</li>
              <li>랜덤 보상 표기문제 수정</li>
              <li>낙뢰스킬 잔상 버그 수정</li>
              <li>인게임 UI 가시성 개선</li>
              <li>약자 멸시 / 연쇄 폭발 특성 기능 누락 개선</li>
              <li>튜토리얼 개선 및 신규 내용 추가</li>
              <li>업그레이드 비용 가시성 개선</li>
              <li>버전 표기 및 License 표기</li>
            </ul>
            <h4 className="font-semibold mb-2">기타 업데이트</h4>
            <ul className="list-disc pl-5 text-sm mb-4 space-y-1">
              <li>로그라이크성 강화 : 적 생성 로직 및 스케일링 수정</li>
              <li>플레이어 저장 데이터 암호화</li>
              <li>서버 연동 (순위표 및 데이터 수집)</li>
              <li>로딩화면 개선</li>
            </ul>
            <h4 className="font-semibold mb-2">v0.2.2</h4>
            <ul className="list-disc pl-5 text-sm mb-4 space-y-1">
              <li>업그레이드 보상 문구 수정</li>
              <li>TAB키(UI숨김) 기능 점수,시간 패널 과 연동</li>
            </ul>
            <h4 className="font-semibold mb-2">v0.2.3</h4>
            <ul className="list-disc pl-5 text-sm mb-4 space-y-1">
              <li>최종점수 0 으로 표기되는 버그 수정</li>
              <li>데이터 수집관련 버그 수정</li>
              <li>복수의 화신 : 타워 데미지분석 이미지 오류 개선</li>
              <li>
                웨이브 알림이 최우선으로 작용되도록 개선, 주요알림 우선순위
                재설정
              </li>
              <li>간헐적으로 상점 뽑기모션 오류로 인한 로직 개선</li>
              <li>간헐적으로 타워버튼 비활성화 되는 버그 방어조치</li>
              <li>무한모드 점수 등록 시 순위표 최신화 문제 개선</li>
              <li>희생전략 특성 : 스킬버튼 관련 버그 수정</li>
              <li>연쇄폭발 특성 : 하향</li>
              <li>상점 뽑기 종류 추가</li>
            </ul>
            <h4 className="font-semibold mb-2">v0.2.4</h4>
            <ul className="list-disc pl-5 text-sm mb-4 space-y-1">
              <li>파괴신의 석상 버그 수정</li>
              <li>오류 추적 시스템 추가</li>
              <li>신규 적 3종 추가</li>
              <li>
                투사체 관련 타워 버그 개선 : 투사체가 남아 렉을 유발하는 문제
              </li>
              <li>게임종료 후 로비에서 뽑기 시 멈추는 버그 개선</li>
              <li>다량의 타워 설치시 소리 문제 개선</li>
            </ul>
          </div>
        );
      case "v0.1.0-beta":
        return (
          <div className="p-4 bg-gray-100 rounded mb-6">
            <div className="grid grid-cols-2 items-center mb-4">
              <p className="font-semibold text-lg">Beta Test Build (v0.1.0)</p>
              <div className="flex justify-end">
                <a
                  href="https://drive.google.com/file/d/1_FSAAZ8XK97Lj_3DWX88dmIYohBiB6F4/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
                >
                  다운로드
                </a>
              </div>
            </div>

            <h4 className="font-semibold mb-2">주요 업데이트</h4>
            <ul className="list-disc pl-5 text-sm mb-4 space-y-1">
              <li>
                <b>장비 시스템 추가</b>: 장비 획득 및 장착 기능, 인벤토리 UI,
                장신구 장착 시 특수 스킬 발동
              </li>
              <li>
                <b>첫 웨이브 특성 시스템</b>: 게임 시작 시 10가지 특성 중 2개를
                제시하고 1개 선택 가능
              </li>
              <li>
                <b>웨이브 랜덤 보상 개선</b>: 웨이브 종료 시 선택형 보상 제공,
                장비/골드/SP 등 다양화
              </li>
              <li>
                <b>난이도 선택 기능</b>: 대기실에서 난이도를 선택할 수 있으며,
                적 체력·골드 배율 적용
              </li>
              <li>
                <b>툴팁 시스템</b>: 장비, 타워, 스킬에 마우스 오버 시 정보 툴팁
                표시
              </li>
              <li>
                <b>알림 및 게임 속도 개선</b>: 알림 겹침 문제 해결, 웨이브 대기
                시간은 게임 속도와 독립
              </li>
              <li>
                <b>맵·적·튜토리얼 확장</b>: 신규 눈 테마 맵, 적
                스프라이트/애니메이션, 튜토리얼 텍스트 추가
              </li>
              <li>
                <b>사운드 및 해상도 대응</b>: 사운드 볼륨 정규화, 1280~1600
                해상도 대응 UI 개선
              </li>
              <li>
                <b>기타 버그 수정</b>: 타워 설치 안정화, 장비 툴팁 표시 개선,
                웨이브 난이도 밸런스 조정
              </li>
            </ul>
          </div>
        );
      case "v0.3.0-alpha":
        return (
          <div className="p-4 bg-gray-100 rounded mb-6">
            <div className="grid grid-cols-2 items-center mb-4">
              <p className="font-semibold text-lg">Alpha Test Build (v0.3.0)</p>
              <div className="flex justify-end space-x-2"></div>
            </div>
            <p className="text-xs text-gray-600 mb-4">
              ※ AlphaVersion 까지의 배포파일은 제거 되었습니다.
            </p>

            <h4 className="font-semibold mb-2">주요 업데이트</h4>
            <ul className="list-disc pl-5 text-sm mb-4 space-y-1">
              <li>
                <b>게임 타이틀 및 설정 메뉴</b>: 해상도, 볼륨 조절 등 기본 환경
                설정 기능 추가
              </li>
              <li>
                <b>타워 공격 애니메이션</b>: 모든 타워의 공격 모션에 애니메이션
                적용 및 공격 속도와 동기화
              </li>
              <li>
                <b>사운드 시스템</b>: BGM 및 모든 효과음(SFX) 추가, 개별 사운드
                제어 시스템 구현
              </li>
              <li>
                <b>성능 최적화</b>: 오브젝트 풀링 시스템을 도입하여 게임 내
                오브젝트 생성/파괴 비용 감소
              </li>
              <li>
                <b>코드 리팩토링</b>: State 패턴 적용, UI 업데이트 로직 개선 등
                코드 구조 전반 개선
              </li>
            </ul>
          </div>
        );

      case "v0.2.0":
        return (
          <div className="p-4 bg-gray-50 rounded mb-6">
            <div className="grid grid-cols-2 items-center mb-4">
              <p className="font-semibold text-lg">v0.2.0</p>
            </div>

            <h4 className="font-semibold mb-2">주요 업데이트</h4>
            <ul className="list-disc pl-5 text-sm mb-4 space-y-1">
              <li>
                <b>랜덤 맵 생성</b>: 스테이지 시작 시 맵이 랜덤하게 생성되어
                다양한 전략적 플레이 유도
              </li>
              <li>
                <b>UI 숨김 기능</b>: TAB 키를 통해 UI를 켜고 끌 수 있는 기능
                추가
              </li>
              <li>
                <b>코드 구조 개선</b>: 웨이브, UI 등 내부 시스템 리팩토링 진행
              </li>
            </ul>

            <h4 className="font-semibold mb-2">밸런스 조정</h4>
            <ul className="list-disc pl-5 text-sm mb-4">
              <li>화살비 스킬 데미지 하향</li>
              <li>낙뢰 스킬 데미지 상향 및 방어력 감소 효과 추가</li>
            </ul>
          </div>
        );

      case "v0.1.0":
        return (
          <div className="p-4 bg-gray-50 rounded">
            <div className="grid grid-cols-2 items-center mb-4">
              <p className="font-semibold text-lg">v0.1.0 : 2024-10-11</p>
            </div>

            <h4 className="font-semibold mb-2">최초 데모 버전</h4>
            <ul className="list-disc pl-5 text-sm mb-4">
              <li>타워 설치 및 정보 표시 기능</li>
              <li>스킬 사용 기능</li>
              <li>웨이브 시스템 및 보상</li>
              <li>기본 UI 및 게임 속도 제어</li>
              <li>타워 업그레이드 기능</li>
            </ul>

            <h4 className="font-semibold mb-2">피드백</h4>
            <ul className="list-disc pl-5 text-sm">
              <li>
                <b>기능적 문제</b>: 오디오 크기 조절, SP 상한선 초과, 랜덤 타워
                겹침, 몬스터 경로 이탈
              </li>
              <li>
                <b>밸런스</b>: 특정 스킬(화살비, 레이저) 하향 및 낙뢰 스킬 상향
                필요
              </li>
              <li>
                <b>개선 필요</b>: 마우스 오버 시 스킬 설명 UI 필요
              </li>
            </ul>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">데모 & 테스트 빌드</h2>
      <p className="text-xs text-gray-600 mb-4">
        ※ 폴더 내 2DTowerDefense.exe 또는 RogueTower.exe 파일을 통해 게임 실행
      </p>

      {/* 프로젝트 정보 섹션 */}
      <div className="mb-6 p-4 border rounded-lg bg-white shadow-sm">
        <h3 className="text-lg font-bold mb-3">프로젝트 정보 (Project Info)</h3>
        <div className="space-y-2 text-sm">
          <p>
            <span className="font-semibold w-28 inline-block">명칭 :</span>
            <span>RogueTower</span>
          </p>
          <p>
            <span className="font-semibold w-28 inline-block">개발 환경:</span>
            <span>Unity, C#, PlayFab, Aseprite</span>
          </p>
          <p>
            <span className="font-semibold w-28 inline-block">소스 코드:</span>
            <span>https://github.com/WooGeun-Nam/RogueTower-Code</span>
          </p>
          <p>
            <span className="font-semibold w-28 inline-block">상세 정보:</span>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onTabChange("plan"); // 'plan' 탭으로 전환
              }}
              className="text-blue-600 hover:underline"
            >
              기획서 보기
            </a>
            <span className="mx-2">|</span>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onTabChange("devlog"); // 'devlog' 탭으로 전환
              }}
              className="text-blue-600 hover:underline"
            >
              개발일지 보기
            </a>
          </p>
        </div>
      </div>

      {/* 버전 선택 드롭다운 */}
      <div className="mb-4">
        <label htmlFor="versionSelect" className="font-semibold mr-2">
          빌드 버전 선택:
        </label>
        <select
          id="versionSelect"
          value={selectedVersion}
          onChange={(e) => setSelectedVersion(e.target.value)}
          className="px-3 py-1 border rounded"
        >
          <option value="v0.2.4-beta">Beta Test Build (v0.2.4)</option>
          <option value="v0.1.0-beta">Beta Test Build (v0.1.0)</option>
          <option value="v0.3.0-alpha">Alpha Test Build (v0.3.0)</option>
          <option value="v0.2.0">Alpha Test Build (v0.2.0)</option>
          <option value="v0.1.0">Alpha Test Build (v0.1.0)</option>
        </select>
      </div>

      {renderPatchNote()}
    </div>
  );
};

export default DeployPage;
