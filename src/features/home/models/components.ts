export interface HeaderProps {
  userName: string;
}
export interface CardProps {
  month: string;
  amount: number;
}

export interface MovementItemProps {
  createdAt: string;
  product: string;
  points: number;
  image: string;
  is_redemption: boolean;
  id: string;
  isFirst: boolean;
  isLast: boolean;
}

export interface ListHeaderProps extends HeaderProps, CardProps {}
