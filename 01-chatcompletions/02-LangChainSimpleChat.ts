//1. Langchain 설치 / OpenAI 모듈 설치
// >>  npm install langchain @langchain/core 
// >>  npm install @langchain/openai

//2. OpenAI 패키지에서 모델에 요청을 할때 필요한 클래스를 import
//  .env 모듈을 사용하여 환경변수(openai_api_key)를 불러올 수 있게 import
import { ChatOpenAI } from "@langchain/openai"
import { HumanMessage, SystemMessage } from "@langchain/core/messages"
import "dotenv/config"

//3. 사용하고자하는 모델객체를 생성한다.
const model = new ChatOpenAI({model:"gpt-4o"})

//4. LLM에 전달할 메세지를 구성한다.
//   LangChain에서는 메시지라는 타입이 정의가 되어있다.
//   이전에 OpenAI API를 직접 호출할때는 role을 직접 타이핑했지만, Langchain을 사용하면 메시지 타입만을 이용해서 코딩가능.
//   - SystemMessage : system role 메시지 
//   - HumanMessage : user role 메시지
const messages = [
    new SystemMessage("너는 사내 보안 교육 강사야. 직무별로 구체적인 사례를 1개씩 들고, 회사에 피해가 될 수 있는 행동을 유념할 수 있도록 설명해줘."),
    new HumanMessage("LLM을 활용할 때 주의할 점을 알려줘.")
]

//5. LLM의 결과를 answer 상수에 저장하고, 그중 content 내용만 출력하여 확인.
const answer = await model.invoke(messages)
console.log(answer)
//console.log(answer.content)