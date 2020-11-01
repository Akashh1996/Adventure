import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';
import * as HiIcons from 'react-icons/hi';

export const SidebarData = [
	{
		title: 'Log In',
		path: '/login',
		icon: <AiIcons.AiOutlineLogin />,
		cName: 'nav-text'
	},
	{
		title: 'Register',
		path: '/register',
		icon: <AiIcons.AiOutlineLogin />,
		cName: 'nav-text'
	},
	{
		title: 'Home',
		path: '/',
		icon: <AiIcons.AiFillHome />,
		cName: 'nav-text'
	},
	{
		title: 'My profile',
		path: '/profile',
		icon: <FaIcons.FaUserAlt />,
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
	},
	{
		title: 'Log Out',
		path: '/logout',
		icon: <AiIcons.AiOutlineLogout />,
		cName: 'nav-text'
	}
];
