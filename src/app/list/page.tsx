import Image from 'next/image'
import image2 from '/public/test.png'
import datas from './data.js'

export default function Home() {

    return (
        <div>
            <div>
                <h4 className="title"> 이것은 두번째 스터디용 페이지 입니다</h4>
                {
                    datas.map((data,i) => {
                        return (
                            SampleData(data = data)
                            // <div className="data" key={i}>
                            //     <Image src={image2} alt= "고양이" className="testImage"/>
                            //     <h4>{data}</h4>
                            // </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

function SampleData(data: String){
    return (
        <div className="data">
        <Image src={image2} alt= "고양이" className="testImage"/>
        <h4>{data}</h4>
    </div>
    )
}