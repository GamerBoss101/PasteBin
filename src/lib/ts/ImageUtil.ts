
import Icon from '@iconify/svelte';

export default function setIcon(props: any) {
    const imageIcon: HTMLDivElement = props.parent;
    const extension: string = props.extension;

    switch(extension) {
        case "png": {
            new Icon({ target: imageIcon,
                props: {
                    icon: "mdi:file-png-box",
                    width: "35px",
                    height: "35px"
                }
            });
            break;
        }
        case "jpg": {
            new Icon({ target: imageIcon,
                props: {
                    icon: "mdi:file-jpg-box",
                    width: "35px",
                    height: "35px"
                }
            });
            break;
        }
        case "jpeg": {
            new Icon({ target: imageIcon,
                props: {
                    icon: "mdi:file-jpg-box",
                    width: "35px",
                    height: "35px"
                }
            });
            break;
        }
        case "svg": {
            new Icon({ target: imageIcon,
                props: {
                    icon: "mdi:file-svg-box",
                    width: "35px",
                    height: "35px"
                }
            });
            break;
        }
        case "gif": {
            new Icon({ target: imageIcon,
                props: {
                    icon: "mdi:file-gif-box",
                    width: "35px",
                    height: "35px"
                }
            });
            break;
        }
        case "mp4": {
            new Icon({ target: imageIcon,
                props: {
                    icon: "mdi:file-video-box",
                    width: "35px",
                    height: "35px"
                }
            });
            break;
        }
        case "mp3": {
            new Icon({ target: imageIcon,
                props: {
                    icon: "mdi:file-music-box",
                    width: "35px",
                    height: "35px"
                }
            });
            break;
        }
        case "wav": {
            new Icon({ target: imageIcon,
                props: {
                    icon: "mdi:file-music-box",
                    width: "35px",
                    height: "35px"
                }
            });
            break;
        }
        case "pdf": {
            new Icon({ target: imageIcon,
                props: {
                    icon: "mdi:file-pdf-box",
                    width: "35px",
                    height: "35px"
                }
            });
            break;
        }
        default: {
            new Icon({ target: imageIcon,
                props: {
                    icon: "mdi:file",
                    width: "35px",
                    height: "35px"
                }
            });
            break;
        }
    }
}