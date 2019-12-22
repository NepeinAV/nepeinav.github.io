// Import React
import React from 'react';

// Import Spectacle Core tags
import {
    BlockQuote,
    Cite,
    Deck,
    Heading,
    Image,
    List,
    ListItem,
    Notes,
    Quote,
    Slide,
    Text,
    Appear,
    Anim,
    Fit,
    Fill,
    Layout,
} from 'spectacle';
import styled from 'react-emotion';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import botsgu from '../assets/botsgu.png';
import usecase from '../assets/usecase.png';
import architecture from '../assets/arch.png';
import dialog from '../assets/map.jpg';
import pdf from '../assets/file.svg';
import campus from '../assets/campusuec.png';
import paper from '../assets/bulletin-board1.svg';
import vkLogo from '../assets/VK_Blue_Logo.svg';
import bot from '../assets/Povorot_vlevo_pered.png';
import video from '../assets/video.mp4';

// Require CSS
require('normalize.css');

const H1 = styled(Heading)`
    font-size: 1.5em;
`;

const H2 = styled(Heading)`
    font-size: 1em;
`;

const theme = createTheme(
    {
        primary: 'white',
        secondary: '#1F2022',
        tertiary: '#03A9FC',
        quaternary: '#CECECE',
    },
    {
        primary: 'system-ui, sans-serif',
    },
);

const standardAnim = {
    startValue: {
        transform: 'scale(0.9) translateY(30px)',
        opacity: 0,
    },
    endValue: {
        transform: 'scale(1) translateY(0px)',
        opacity: 1,
    },
};

const standardAnimDuration = {
    transitionDuration: 200,
};

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck
                transition={['slide']}
                transitionDuration={300}
                theme={theme}
                showFullscreenControl={false}
                progress="number"
                controls={false}
                contentWidth="100%"
                contentHeight="100%"
            >
                <Slide bgColor="primary">
                    <Appear {...standardAnimDuration}>
                        <div>
                            <H2 size={2} caps lineHeight={1} textColor="secondary">
                                Проектирование и разработка диалогового интерфейса
                            </H2>
                            <H1
                                size={1}
                                caps
                                lineHeight={1}
                                textColor="secondary"
                                style={{
                                    marginTop: '20px',
                                }}
                            >
                                «Расписание университета»
                            </H1>
                        </div>
                    </Appear>
                </Slide>
                <Slide bgColor="primary">
                    <Appear {...standardAnim} {...standardAnimDuration} order={1}>
                        <div
                            style={{
                                display: 'inline-block',
                            }}
                        >
                            <Image
                                src={paper}
                                style={{
                                    width: 175,
                                    margin: 0,
                                    marginRight: 100,
                                    filter: 'drop-shadow(0 3px 7px rgba(0, 0, 0, 0.1))',
                                }}
                            />
                        </div>
                    </Appear>
                    <Appear {...standardAnim} {...standardAnimDuration} order={2}>
                        <div
                            style={{
                                display: 'inline-block',
                            }}
                        >
                            <Image
                                src={pdf}
                                style={{
                                    width: 175,
                                    margin: 0,
                                    marginRight: 100,
                                    filter: 'drop-shadow(0 3px 7px rgba(0, 0, 0, 0.1))',
                                }}
                            />
                        </div>
                    </Appear>
                    <Appear
                        startValue={{
                            transform: 'scale(0.9) translateY(-19px)',
                            opacity: 0,
                        }}
                        endValue={{
                            transform: 'scale(1) translateY(-39px)',
                            opacity: 1,
                        }}
                        {...standardAnimDuration}
                        order={3}
                    >
                        <div
                            style={{
                                display: 'inline-block',
                            }}
                        >
                            <Image
                                src={campus}
                                style={{
                                    width: 250,
                                    margin: 0,
                                    filter: 'drop-shadow(0 3px 7px rgba(0, 0, 0, 0.1))',
                                }}
                            />
                        </div>
                    </Appear>
                </Slide>
                <Slide bgColor="primary">
                    <Appear
                        startValue={{
                            transform: 'scale(0.9)',
                            opacity: 0,
                        }}
                        endValue={{
                            transform: 'scale(1)',
                            opacity: 1,
                        }}
                        {...standardAnimDuration}
                    >
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginLeft: '-18px',
                            }}
                        >
                            <Image
                                src={vkLogo}
                                style={{
                                    width: 195,
                                    margin: 0,
                                    filter: 'drop-shadow(0 3px 7px rgba(0, 0, 0, 0.1))',
                                }}
                            />
                            <Image
                                src={bot}
                                style={{
                                    width: 130,
                                    height: 130,
                                    margin: 0,
                                    filter: 'drop-shadow(0 3px 7px rgba(0, 0, 0, 0.1))',
                                }}
                            />
                        </div>
                    </Appear>
                    <Appear
                        startValue={{
                            transform: 'translateY(60px)',
                            opacity: 0,
                        }}
                        endValue={{
                            transform: 'translateY(0px)',
                            opacity: 1,
                        }}
                        {...standardAnimDuration}
                    >
                        <div>
                            <H2 size={2} caps lineHeight={1} textColor="secondary">
                                +
                            </H2>
                            <div>
                                <Image
                                    src={campus}
                                    style={{
                                        width: 215,
                                        margin: '0 auto',
                                        marginTop: 40,
                                        filter: 'drop-shadow(0 3px 7px rgba(0, 0, 0, 0.1))',
                                    }}
                                />
                            </div>
                        </div>
                    </Appear>
                </Slide>
                <Slide bgColor="primary">
                    <Appear {...standardAnimDuration}>
                        <H1 size={2} caps lineHeight={1} style={{ marginBottom: 50, fontSize: 'inherit' }}>
                            Варианты использования
                        </H1>
                    </Appear>
                    <Appear {...standardAnim} {...standardAnimDuration}>
                        <Image src={usecase} />
                    </Appear>
                </Slide>
                <Slide bgColor="primary">
                    <Appear {...standardAnimDuration}>
                        <H1
                            size={1}
                            caps
                            lineHeight={1.2}
                            style={{ fontSize: 'inherit', marginBottom: 50 }}
                            textColor="secondary"
                        >
                            API кампусной системы
                        </H1>
                    </Appear>
                    <Appear {...standardAnimDuration}>
                        <H2
                            size={1}
                            caps
                            lineHeight={1.2}
                            style={{ fontSize: 'inherit', marginBottom: 10 }}
                            textColor="secondary"
                        >
                            1. Методы для проверки существования учебных групп/преподавателей
                        </H2>
                    </Appear>
                    <Appear {...standardAnimDuration}>
                        <H2 size={1} caps lineHeight={1.2} style={{ fontSize: 'inherit' }} textColor="secondary">
                            2. Методы для получения расписания
                        </H2>
                    </Appear>
                </Slide>
                <Slide bgColor="primary">
                    <Appear {...standardAnimDuration}>
                        <H1 size={2} caps lineHeight={1} style={{ marginBottom: 50, fontSize: 'inherit' }}>
                            Сценарий регистрации пользователя
                        </H1>
                    </Appear>
                    <Appear {...standardAnim} {...standardAnimDuration}>
                        <Image src={dialog} style={{ height: 700 }} />
                    </Appear>
                </Slide>
                <Slide bgColor="primary">
                    <Appear {...standardAnimDuration}>
                        <H1 size={2} caps lineHeight={1} style={{ marginBottom: 50, fontSize: 'inherit' }}>
                            Архитектура системы
                        </H1>
                    </Appear>
                    <Appear {...standardAnim} {...standardAnimDuration}>
                        <Image src={architecture} />
                    </Appear>
                </Slide>
                <Slide bgColor="primary">
                    <Appear {...standardAnimDuration}>
                        <div>
                            <Image
                                src={botsgu}
                                style={{
                                    width: 175,
                                    marginBottom: 20,
                                    filter: 'drop-shadow(0 3px 7px rgba(0, 0, 0, 0.1))',
                                }}
                            />
                            <H2 size={2} caps lineHeight={1} textColor="secondary" style={{ marginBottom: 20 }}>
                                853 пользователя
                            </H2>
                        </div>
                    </Appear>
                </Slide>
                <Slide bgColor="primary">
                    <video
                        autoPlay
                        src={video}
                        style={{ height: '70vh', borderRadius: 16, boxShadow: '0 3px 10px 0 rgba(0,0,0,0.1)' }}
                    ></video>
                </Slide>
                <Slide bgColor="primary">
                    <H1 size={1} caps lineHeight={1} textColor="secondary">
                        Спасибо за внимание!
                    </H1>
                </Slide>
            </Deck>
        );
    }
}
