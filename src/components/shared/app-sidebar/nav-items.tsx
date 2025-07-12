import { Separator } from '@/components/ui/separator';
import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { BookOpen, BookUp2, ChartArea, MessageCircle, SquareDashedBottomCode, Trophy, Users } from 'lucide-react'
import Link from 'next/link';

type NavItem = {
  label: string;
  path: string;
  icon: React.ElementType;
}

export const NavItems = () => {
  const navItems: NavItem[] = [
    {
      label: 'Courses',
      path: '/',
      icon: SquareDashedBottomCode
    },
    {
      label: 'My courses',
      path: '/my-courses',
      icon: BookUp2
    },
    {
      label: 'Ranking',
      path: '/ranking',
      icon: Trophy
    }
  ]

  const adminNavItems: NavItem[] = [
    {
      label: 'Statistics',
      path: '/admin',
      icon: ChartArea
    },
    {
      label: 'Manage courses',
      path: '/admin/courses',
      icon: BookOpen
    },
    {
      label: 'Manage users',
      path: '/admin/users',
      icon: Users
    },
    {
      label: 'Manage comments',
      path: '/admin/comments',
      icon: MessageCircle
    }
  ]

  const renderNavItems = (items: NavItem[]) => {
    return items.map((item) => (
      <SidebarMenuItem key={item.label}>
        <SidebarMenuButton asChild tooltip={item.label}>
          <Link href={item.path}>
            <item.icon className='text-primary group-data-[collapsible=icon]:text-white hover:text-primary transition-all' />
            <span>{item.label}</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    ));
  };

  return (
    <SidebarGroup>
      <SidebarMenu>
        {renderNavItems(navItems)}

        <Separator className='my-2'/>

        {renderNavItems(adminNavItems)}

      </SidebarMenu>
    </SidebarGroup>
  )
}