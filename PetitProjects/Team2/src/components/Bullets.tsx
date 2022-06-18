import { intro} from '../constants/introduce'
import styled from "styled-components"

const BulletsList = styled.ul`
	width: 400px;
	line-height: 16px;
	text-align: center;
	position: fixed;
	left: calc(18.772563% - 200px);
	top: 50vh;
	transform: translateY(-200px);
	color: #1b1b1b;
	font-weight: 600;
`

const BulletItem = styled.li<{focused: boolean}>`
	color: #1b1b1b;
	padding: 12px;
	margin: 50px;
	display: block;
	position: relative;
	font-size: ${({focused}) => focused ? '257px' : '16px' };
`

const Bullets = () => {
	return (
		<BulletsList>
			{intro.map((item, index) => (<BulletItem key={item.fullName} focused={index === 0}>{item.first}</BulletItem>))}
		</BulletsList>
	)
}

export default Bullets