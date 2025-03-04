import React from 'react'
import Card from 'react-bootstrap/Card'
import { ImPointRight } from 'react-icons/im'

function AboutCard() {
	return (
		<Card className='quote-card-view'>
			<Card.Body>
				<blockquote className='blockquote mb-0'>
					<p style={{ textAlign: 'justify' }}>
						Hi Everyone, I am <span className='purple'>Sharipov Javohir </span>
						from <span className='purple'> Tashkent, Uzbekistan.</span>
						<br />I am currently working as an assistant instructor intern at{' '}
						<span className='purple'>Najot Ta'lim</span>
						<br />
						I am about to complate Najot Ta'lim front-end course
						<br />
						<br />
						Apart from coding, some other activities that I love to do!
					</p>
					<ul>
						<li className='about-activity'>
							<ImPointRight /> Playing Football
						</li>
						<li className='about-activity'>
							<ImPointRight /> Going to the gym
						</li>
						<li className='about-activity'>
							<ImPointRight /> Playing chess
						</li>
					</ul>

					<p style={{ color: 'rgb(155 126 172)' }}>
						"Strive to build things that make a difference!"{' '}
					</p>
					<footer className='blockquote-footer'>Soumyajit</footer>
				</blockquote>
			</Card.Body>
		</Card>
	)
}

export default AboutCard
