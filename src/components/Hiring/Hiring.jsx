import { ContainerBackground } from "components/Container/ContainerBackground"
import { Title } from "components/Title/Title"
import { Button, DivHiring, ImageLeft, ImageRight, Text } from "./Hiring.styles"
import HiringLeft from '../../assets/images/Hiring/hiringLeft.png'
import HiringRight from '../../assets/images/Hiring/hiringRight.png'

export const Hiring = () => {
    return <ContainerBackground>

        
        <DivHiring>
            <ImageLeft src={HiringLeft} alt="people"/>
            <Title>
                We are hiring!
            </Title>
            <Text>We're always looking for talented people to join and help build our startups.
                Check out our current openings</Text>
            <Button>See current openings </Button>
            <ImageRight src={HiringRight} alt="people"/>
        </DivHiring>
        
    </ContainerBackground>
}