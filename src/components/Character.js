// Write your Character component here
import React from 'react';
import styled from 'styled-components';

function Character(props) {

	const { charData } = props;

	const Container = styled.div`
		padding: 1rem;
		color: white;
	`;

	const Headers = styled.div`
		display: flex;
		justify-content: space-between;
		padding: .2rem;
		font-weight: bold;
	`;

	const Person = styled.div`
		padding: .2rem;
		text-align: left;
		display: flex;
		justify-content: space-between;
	`;

	const newCharData = Array.from(charData)

	return (
		<Container>
			<Headers>
				<div>Name</div>
				<div>Eye Color</div>
			</Headers>
			
			{newCharData.map(p => {
				return <Person>
							<div>{p.name}</div>
							<div style={{color: p.eye_color}}>{p.eye_color}</div>
						</Person>
			})}
		</Container>
	);
}

export default Character;