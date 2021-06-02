import { renderErrorPage } from "../utils/error.js";

// 플레이스 리스트 가져오기
export const getPlacesAPI = async ( options ) => {
    // 데이터 구조 분해 할당
    const { 
        type, 
        lat, 
        lon, 
        userId,
        placeName,
        babyMenu,
        babyBed,
        babyChair,
        babyTableware,
        diaperChange,
        stroller,
        meetingRoom,
        nursingRoom,
        playRoom,
        parking
    } = options;

    // 정보 확인용 로그
    console.log(`%c
    ====== 기본 정보 ======
    타입: ${type}
    위도: ${lat}
    경도: ${lon}
    회원번호: ${userId}
    장소 카테고리: ${placeName}
    == 레스토랑 편의 시설정보 ==
    아기음식: ${babyMenu}
    아기침대: ${babyBed}
    아기의자: ${babyChair}
    아기식기: ${babyTableware}
    기저귀갈기: ${diaperChange}
    유모차출입: ${stroller}
    미팅룸: ${meetingRoom}
    수유실: ${nursingRoom}
    놀이방: ${playRoom}
    주차여부: ${parking}
    `,`color:blue`);

    // 쿼리스트링중 'type' 키를 통해 전체검색, 조건검색으로 나누어 
    // 상황에 따라 URL을 바꿉니다.
    let url = "https://hohocompany.co.kr";
    if( type.toUpperCase() === "ALLSEARCH"){
        url = url.concat(`/api/places/${placeName}?lat=${lat}&lon=${lon}`);
    }else if( type.toUpperCase() === "FILTER"){
        url = url.concat(`/api/places/restaurants?
        userId=${userId}
        &lat=${lat}
        &lon=${lon}
        &babyMenu=${babyMenu}
        &babyBed=${babyBed}
        &babyTableware=${babyTableware}
        &babyChair=${babyChair}
        &diaperChange=${diaperChange}
        &stroller=${stroller}
        &playRoom=${playRoom}
        &nursingRoom=${nursingRoom}
        &meetingRoom=${meetingRoom}
        &parking=${parking}`).trim();
    }else{
        url = url.concat(`/api/places/restaurants?lat=${lat}&lon=${lon}`);
    }

    // API 요청을 보내고 정상적인 응답, 또는 에러를 받습니다.
    // 에러를 받을 경우 화면을 에러용 페이지로 리랜더링한 후 
    // 에러를 띄워 코드를 중단 시킵니다.
    return await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(res => res.json())
    .catch(err => { 
        renderErrorPage();
        console.error( err );
        throw new Error("Get Places data false");
    });
}