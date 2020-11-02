import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';
import * as HiIcons from 'react-icons/hi';
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
		title: 'Groups',
		path: '/groups',
		icon: <HiIcons.HiUserGroup />,
		cName: 'nav-text'
	},
	{
		title: 'Photos',
		path: '/photos',
		icon: <IoIcons.IoMdPhotos />,
		cName: 'nav-text'
	},
	{
		title: 'Users reviews',
		path: '/reviews',
		icon: <MdIcons.MdRateReview />,
		cName: 'nav-text'
	},
	{
		title: 'Companies',
		path: '/companies',
		icon: <AiIcons.AiFillShop />,
		cName: 'nav-text'
	}
];
