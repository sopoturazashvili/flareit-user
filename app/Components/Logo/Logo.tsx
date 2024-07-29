import Link from 'next/link';

const Logo = () => {
    return (
        <Link href={'/'}>
            <img src="/Image/Logo.svg" alt="Logo" />
        </Link>
    );
};

export default Logo;
