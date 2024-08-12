import React, {useState, useEffect} from 'react'
import Particles, {initParticlesEngine} from '@tsparticles/react'
import { loadFull } from 'tsparticles';
import { loadSlim } from '@tsparticles/slim';

const ParticleBg = () => {
    const loadParticles = async(main) => {
        await loadFull(main)
    }

    const [ init, setInit ] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);


  return (
    <>
        {init && 
            <Particles 
            className='z-0'
                id='tsparticles'
                particlesLoaded={loadParticles}
                options={{
                    fullScreen: {
                        enable: true,
                        zIndex : -1
                    },
                    background: {
                        color: {
                            value: "#fff"
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            // resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.1,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#000",
                        },
                        links: {
                            color: "#000",
                            distance: 150,
                            enable: true,
                            opacity: 0.4,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 6,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                // area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.4,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
        }
    </>
  )
}

export default ParticleBg