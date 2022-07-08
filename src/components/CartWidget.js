import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
    return (
        <button>
            <Badge badgeContent={2} color="primary" />
            < ShoppingCartIcon />
        </button>
    );
}

export default CartWidget;