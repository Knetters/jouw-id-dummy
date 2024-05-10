import { useMemo } from 'react';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import cx from '@/utils/cx';
import styles from './RichText.module.scss';

type Props = {
    content: string;
    className?: string;
    style?: string;
};

const RichText = ({ content, className, style }: Props) => {
    const processedContent = useMemo(
        () =>
            (content &&
                remark().use(remarkHtml).processSync(content).toString()) ||
            content,
        [content],
    );

    return (
        <div
            className={cx(className, styles.RichText)}
            style={{ color: style }}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: processedContent }}
        />
    );
};

export default RichText;
