import { Icons } from '../utils/icons';

export const menuItems = {
  mainMenu: [
    { id: 'home', icon: Icons.home, text: 'Home', path: '/' },
    { id: 'profile', icon: Icons.profile, text: 'Profile', path: '/profile' },
    { id: 'subjects', icon: Icons.subjects, text: 'Subjects', path: '/' },
    { id: 'quizzes', icon: Icons.quizzes, text: 'Quizzes', path: '/' },
    { id: 'review', icon: Icons.review, text: 'Quiz Review', path: '/' },
  ],
  bottomMenu: [
    { id: 'help', icon: Icons.help, text: 'Help', path: '/help' },
    { id: 'logout', icon: Icons.logout, text: 'Logout', path: '/logout' },
  ]
};
