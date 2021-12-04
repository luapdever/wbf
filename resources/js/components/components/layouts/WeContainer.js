function WeContainer(props) {
    const styles = {
        background:
            "url(" +
            props.img +
            ") center no-repeat, " +
            (props.colorMode ?? "rgba(0, 0, 0, 0.01)"),
        backgroundSize: "cover",
        height: props.height ?? "auto",
        color: props.color ?? "auto",
    };

    return (
        <div>
            <div className="we-container p-5" style={styles}>
                {props.children}
            </div>
        </div>
    );
}

export default WeContainer;
