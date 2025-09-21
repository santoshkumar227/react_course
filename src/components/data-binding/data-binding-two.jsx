import React, { useState, useEffect } from 'react';

/**
 * Simple child component to demonstrate one-way (prop) binding.
 */
const DisplayCard = ({ title, value }) => {
    return (
        <div className="card mb-2">
            <div className="card-body">
                <h6 className="card-title">{title}</h6>
                <p className="card-text">{value}</p>
            </div>
        </div>
    );
};

/**
 * Main DataBinding component.
 */
const DataBindingTwo = () => {
    // Two-way binding example: input <-> state
    const [name, setName] = useState('');

    // Derived/display-only state
    const [uppercaseName, setUppercaseName] = useState('');

    // List rendering and adding items
    const [items, setItems] = useState(['Apple', 'Banana']);
    const [newItem, setNewItem] = useState('');

    // Effect: update derived value when name changes
    useEffect(() => {
        setUppercaseName(name.toUpperCase());
    }, [name]);

    // Effect: log name changes (debugging/demo)
    useEffect(() => {
        if (name) {
            console.log(`Name changed to: ${name}`);
        }
    }, [name]);

    const addItem = (e) => {
        e.preventDefault();
        const trimmed = newItem.trim();
        if (!trimmed) return;
        setItems((prev) => [...prev, trimmed]);
        setNewItem('');
    };

    return (
        <div className="container py-4">
            <h2 className="mb-4">Data Binding Demo</h2>

            <section className="mb-4">
                <h5>Two-way Binding (Input ↔ State)</h5>
                <div className="mb-2">
                    <label htmlFor="nameInput" className="form-label">
                        Your name:
                    </label>
                    <input
                        id="nameInput"
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Type your name"
                    />
                </div>
                <p>
                    You typed: <strong>{name || '<empty>'}</strong>
                </p>
                <p>
                    Uppercased (derived): <strong>{uppercaseName || '<empty>'}</strong>
                </p>
            </section>

            <section className="mb-4">
                <h5>One-way Binding (Parent → Child)</h5>
                <DisplayCard title="Raw Name" value={name || '(none)'} />
                <DisplayCard title="Uppercased" value={uppercaseName || '(none)'} />
            </section>

            <section className="mb-4">
                <h5>List Binding & Dynamic Rendering</h5>
                <form onSubmit={addItem} className="mb-2 d-flex gap-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="New item"
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary">
                        Add
                    </button>
                </form>
                {items.length === 0 ? (
                    <p className="text-muted">No items yet.</p>
                ) : (
                    <ul className="list-group">
                        {items.map((it, idx) => (
                            <li key={idx} className="list-group-item">
                                {it}
                            </li>
                        ))}
                    </ul>
                )}
            </section>

            <section>
                <h5>Quick Controls</h5>
                <button
                    className="btn btn-secondary me-2"
                    onClick={() => setName('React User')}
                >
                    Set Name to "React User"
                </button>
                <button className="btn btn-outline-danger" onClick={() => setName('')}>
                    Clear Name
                </button>
            </section>
        </div>
    );
};

export default DataBinding;
