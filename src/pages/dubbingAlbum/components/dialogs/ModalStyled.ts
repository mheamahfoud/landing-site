import { styled } from "@mui/material";
import { Modal } from "react-bootstrap";
// interface Props {
//     lg:string,
//     md:string,
//     sm:string
// }
export const ModalStyle = styled(Modal)(( {heightTem} ) => ({
    '@media ((min-width: 1060px) )': {
        '.modal-content': {
            height: heightTem.lg,
        },
        '.modal-dialog': {
            width: '1100px',
            maxWidth: '100%'
        },
    },
    '@media ((min-width: 640px) and (max-width: 1060px))': {
        '.modal-content': {
            height: '800px',
        },
        '.modal-dialog': {
            width: '1100px',
            maxWidth: '100%'
        },
    },
    '@media ((min-width: 641px) and (max-width: 960px))': {
        '.modal-content': {
            height:heightTem.md,
        },
        '.modal-dialog': {
            width: '750px',
            margin: 'auto',
            maxWidth: '100%'
        },
    },

    '@media ((min-width: 540px) and (max-width: 640px))': {
        '.modal-content': {
            height: heightTem.sm,
        },
        '.modal-dialog': {
            width: '415px',
            margin: 'auto',
            maxWidth: '100%'
        },
    },
    '@media ((max-width: 540px))': {
        '.modal-content': {
            height:heightTem.sm,
        },
        '.modal-dialog': {
            width: '307px',
            margin: 'auto',
            maxWidth: '100%'
        },
    }

}));

