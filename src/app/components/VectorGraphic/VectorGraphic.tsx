import cx from '@/utils/cx';

// Icon imports
import ArrowLeft from '@/components/graphics/icons/arrow-left.svg';
import Checkmark from '@/components/graphics/icons/checkmark.svg';
import Info from '@/components/graphics/icons/info.svg';
import FoldOut from '@/components/graphics/icons/foldout.svg';
import ArrowDown from '@/components/graphics/icons/arrowDown.svg';
import Menu from '@/components/graphics/icons/menu.svg';
import ChevronRight from '@/components/graphics/icons/chevron-right.svg';
import Close from '@/components/graphics/icons/close.svg';
import Clock from '@/components/graphics/icons/clock.svg';
import Cross from '@/components/graphics/icons/cross.svg';
import Profile from '@/components/graphics/icons/profile.svg';
import Logo from '@/components/graphics/icons/logo.svg';
import LogoText from '@/components/graphics/icons/logo-text.svg';
import NewsInterests from '@/components/graphics/icons/news-interests.svg';
import Confirmed from '@/components/graphics/icons/confirmed.svg';
import Email from '@/components/graphics/icons/email.svg';
import Error from '@/components/graphics/icons/error.svg';
import Success from '@/components/graphics/icons/success.svg';
import Location from '@/components/graphics/icons/location.svg';
import Password from '@/components/graphics/icons/password.svg';
import Heart from '@/components/graphics/icons/heart.svg';
import Person from '@/components/graphics/icons/person.svg';
import Illustration1 from '@/components/graphics/illustrations/illustration-1.svg';
import Illustration2 from '@/components/graphics/illustrations/illustration-2.svg';
import Illustration3 from '@/components/graphics/illustrations/illustration-3.svg';
import ArrowRight from '@/components/graphics/icons/arrow-right.svg';
import ReadMoreIllustration1 from '@/components/graphics/illustrations/readmore-illustration-1.svg';
import ReadMoreIllustration2 from '@/components/graphics/illustrations/readmore-illustration-2.svg';
import ReadMoreIllustration3 from '@/components/graphics/illustrations/readmore-illustration-3.svg';

// styles
import styles from './VectorGraphic.module.scss';

const icons: Record<
    string,
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
> = {
    checkmark: Checkmark,
    chevronRight: ChevronRight,
    info: Info,
    foldout: FoldOut,
    arrowDown: ArrowDown,
    menu: Menu,
    clock: Clock,
    cross: Cross,
    close: Close,
    profile: Profile,
    arrowRight: ArrowRight,
    arrowLeft: ArrowLeft,
    confirmed: Confirmed,
    person: Person,
    email: Email,
    error: Error,
    success: Success,
    location: Location,
    password: Password,
    heart: Heart,
    newsInterests: NewsInterests,
};

const illustrations: Record<
    string,
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
> = {
    logo: Logo,
    logoText: LogoText,
    illustration1: Illustration1,
    illustration2: Illustration2,
    illustration3: Illustration3,
    readmoreIllustration1: ReadMoreIllustration1,
    readmoreIllustration2: ReadMoreIllustration2,
    readmoreIllustration3: ReadMoreIllustration3,
};

const vectorGraphics: Record<
    string,
    React.FunctionComponent<React.SVGProps<SVGSVGElement>>
> = { ...icons, ...illustrations };

export const iconNames = Object.keys(icons);
export const illustrationNames = Object.keys(illustrations);

type Props = {
    name: string;
    className?: string;
};

const VectorGraphic = ({ name, className }: Props) => {
    const IconComponent = vectorGraphics[name];

    return IconComponent ? (
        <IconComponent className={cx(styles.VectorGraphic, className)} />
    ) : null;
};

export default VectorGraphic;
