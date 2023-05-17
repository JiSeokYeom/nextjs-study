
export default function Home() {
  let name = "Yeom"
  let link = "http://google.com"
  return (
    <div>
      <h4 style={{color:"red",fontSize:"30px"}}>이것은 스터디용 페이지 입니다</h4>
      <p className="mainSubTitle">by {name}</p>
      <a href={link}> 링크</a>
    </div>
  )
}
