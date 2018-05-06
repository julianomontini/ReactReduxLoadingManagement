export const createLoadingSelector = (actions, id) => state => {
    return actions.some(action => {
        const obj = state.loading[action]
        if(!obj)
            return false;
        if(!id)
            return obj.loading
        return obj.loading && obj.id == id
    });
}