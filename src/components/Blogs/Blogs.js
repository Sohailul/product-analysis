import React from 'react';

const Blogs = () => {
    return (
        <div className='px-4 pt-10 pb-24 mx-auto max-w-7xl md:px-2'>
            <h1 className='text-4xl'>What is Contex API?</h1>
            <p className='text-2xl mt-3'>The React Context API is a way for a React app to effectively produce global variables
                that can be passed around. This is the alternative to "prop drilling" or moving props from
                grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach
                to state management using Redux. It allows one to share state across the entire app (or part of it) lightly and with ease.</p>

            <h1 className='text-4xl mt-3'>What is Semantic Tag?</h1>
            <p className='text-xl mt-3'>
                Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page. Text that is enclosed in the code tag is immediately recognized by the browser as some type of coding language.
                <br /><span className='text-2xl'><i>Exampale of Semantic tags</i></span><br />
                Abbreviation
                Acronym
                Long quotation
                Definition
                Address for author(s) of the document
                Citation
                Code reference
                Teletype text
                Logical division
                Generic inline style container
                Deleted text
                Inserted text
                Emphasis
                Strong emphasis
                First-level headline
                Second-level headline
                Third-level headline
                Fourth-level headline
                Fifth-level headline
                Sixth-level headline
                Thematic break
                Text to be entered by the user
                Pre-formatted text
                Short inline quotation
                Sample output
                Subscript
                Superscript
                Variable or user defined text
            </p>
        </div>
    );
};

export default Blogs;