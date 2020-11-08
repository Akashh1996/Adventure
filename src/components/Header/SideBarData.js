import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FaIcons from 'react-icons/fa';

export const SidebarData = [
	{
		title: 'Home',
		path: '/',
		icon: <AiIcons.AiFillHome />,
		cName: 'nav-text'
	},
	{
		title: 'Maps',
		path: '/maps',
		icon: <FaIcons.FaMapMarkedAlt />,
		cName: 'nav-text'
	},
	{
		title: 'Photos',
		path: '/photos',
		icon: <IoIcons.IoMdPhotos />,
		cName: 'nav-text'
	}
];
