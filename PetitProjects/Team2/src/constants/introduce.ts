export type Intro = {
	first: string;
	fullName: string;
	keywords: string[];
	color: string;
}

export const intro: Intro[] = [
	{ 
		first: 'M',
		fullName: 'Moon Seokyoung',
		keywords: ['ENFP', '여행자🧳', '파티러버🥳', '백패커🎒', '식집사🌿'],
		color: '#F2B035'
	},
	{ 
		first: 'C',
		fullName: 'Choi Junghun',
		keywords: ['INFP', '키위아빠🐩', '바이커🛵', '조축러⚽️', '🥛'],
		color: '#F28963'
	},
	{ 
		first: 'L',
		fullName: 'Lee Duckhee',
		keywords: ['ISFJ', '빈희오빠🐕', '워커🚶🏻‍♂️','국밥러🥘', '마트사냥꾼🛒'],
		color: '#049DD9'
	},
	{ 
		first: 'P',
		fullName: 'Park Minsik',
		keywords: ['INTJ', '러너🏃🏻‍♂️', '깔끄미🧹', '캠퍼🏕' , '향덕후👃🏻'],
		color: '#F2167D'
	}
]