
namespace OpenFin.Interop.Win.Sample
{
    partial class MainWindow
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(MainWindow));
            this.statusStrip = new System.Windows.Forms.StatusStrip();
            this.openFinStatusLabel = new System.Windows.Forms.ToolStripStatusLabel();
            this.orderStatusLabel = new System.Windows.Forms.ToolStripStatusLabel();
            this.tableLayoutPanel1 = new System.Windows.Forms.TableLayoutPanel();
            this.label4 = new System.Windows.Forms.Label();
            this.contextTypeDropDown = new System.Windows.Forms.ComboBox();
            this.ContextInputLabel = new System.Windows.Forms.Label();
            this.ContextItemComboBox = new System.Windows.Forms.ComboBox();
            this.label2 = new System.Windows.Forms.Label();
            this.contextGroupComboBox = new System.Windows.Forms.ComboBox();
            this.label3 = new System.Windows.Forms.Label();
            this.interopBrokerInput = new System.Windows.Forms.TextBox();
            this.receivedInstrument = new System.Windows.Forms.Label();
            this.receivedContext = new System.Windows.Forms.Label();
            this.embeddedViewPanel = new System.Windows.Forms.Panel();
            this.embeddedView = new Openfin.WinForm.EmbeddedView();
            this.separator = new System.Windows.Forms.Label();
            this.label1 = new System.Windows.Forms.Label();
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            this.panelUnderline = new System.Windows.Forms.Panel();
            this.label5 = new System.Windows.Forms.Label();
            this.submitContextButton = new System.Windows.Forms.Button();
            this.connectToBrokerButton = new System.Windows.Forms.Button();
            this.createBrokerButton = new System.Windows.Forms.Button();
            this.panelButtons = new System.Windows.Forms.Panel();
            this.statusStrip.SuspendLayout();
            this.tableLayoutPanel1.SuspendLayout();
            this.embeddedViewPanel.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            this.panelUnderline.SuspendLayout();
            this.panelButtons.SuspendLayout();
            this.SuspendLayout();
            // 
            // statusStrip
            // 
            this.statusStrip.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(30)))), ((int)(((byte)(31)))), ((int)(((byte)(35)))));
            this.statusStrip.ImageScalingSize = new System.Drawing.Size(24, 24);
            this.statusStrip.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.openFinStatusLabel,
            this.orderStatusLabel});
            this.statusStrip.Location = new System.Drawing.Point(0, 1097);
            this.statusStrip.Name = "statusStrip";
            this.statusStrip.Padding = new System.Windows.Forms.Padding(2, 0, 28, 0);
            this.statusStrip.Size = new System.Drawing.Size(1206, 39);
            this.statusStrip.TabIndex = 0;
            // 
            // openFinStatusLabel
            // 
            this.openFinStatusLabel.ForeColor = System.Drawing.Color.White;
            this.openFinStatusLabel.Name = "openFinStatusLabel";
            this.openFinStatusLabel.Size = new System.Drawing.Size(223, 30);
            this.openFinStatusLabel.Text = "OpenFin Disconnected";
            // 
            // orderStatusLabel
            // 
            this.orderStatusLabel.Name = "orderStatusLabel";
            this.orderStatusLabel.Size = new System.Drawing.Size(0, 30);
            // 
            // tableLayoutPanel1
            // 
            this.tableLayoutPanel1.AutoSize = true;
            this.tableLayoutPanel1.ColumnCount = 3;
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Absolute, 300F));
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Absolute, 300F));
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Absolute, 566F));
            this.tableLayoutPanel1.Controls.Add(this.label4, 0, 0);
            this.tableLayoutPanel1.Controls.Add(this.contextTypeDropDown, 0, 1);
            this.tableLayoutPanel1.Controls.Add(this.ContextInputLabel, 0, 2);
            this.tableLayoutPanel1.Controls.Add(this.ContextItemComboBox, 0, 3);
            this.tableLayoutPanel1.Controls.Add(this.label2, 1, 0);
            this.tableLayoutPanel1.Controls.Add(this.contextGroupComboBox, 1, 1);
            this.tableLayoutPanel1.Controls.Add(this.label3, 1, 2);
            this.tableLayoutPanel1.Controls.Add(this.interopBrokerInput, 1, 3);
            this.tableLayoutPanel1.Controls.Add(this.receivedInstrument, 2, 0);
            this.tableLayoutPanel1.Controls.Add(this.receivedContext, 2, 1);
            this.tableLayoutPanel1.Dock = System.Windows.Forms.DockStyle.Top;
            this.tableLayoutPanel1.Location = new System.Drawing.Point(0, 104);
            this.tableLayoutPanel1.Margin = new System.Windows.Forms.Padding(6, 7, 6, 7);
            this.tableLayoutPanel1.Name = "tableLayoutPanel1";
            this.tableLayoutPanel1.Padding = new System.Windows.Forms.Padding(20);
            this.tableLayoutPanel1.RowCount = 4;
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 50F));
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 50F));
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 50F));
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 50F));
            this.tableLayoutPanel1.Size = new System.Drawing.Size(1206, 240);
            this.tableLayoutPanel1.TabIndex = 4;
            // 
            // label4
            // 
            this.label4.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left)));
            this.label4.AutoSize = true;
            this.label4.Font = new System.Drawing.Font("Segoe UI", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.label4.ForeColor = System.Drawing.Color.White;
            this.label4.Location = new System.Drawing.Point(20, 34);
            this.label4.Margin = new System.Windows.Forms.Padding(0, 6, 6, 6);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(143, 30);
            this.label4.TabIndex = 5;
            this.label4.Text = "Context Type";
            // 
            // contextTypeDropDown
            // 
            this.contextTypeDropDown.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.contextTypeDropDown.FormattingEnabled = true;
            this.contextTypeDropDown.Items.AddRange(new object[] {
            "Instrument",
            "Contact",
            "Organization"});
            this.contextTypeDropDown.Location = new System.Drawing.Point(26, 77);
            this.contextTypeDropDown.Margin = new System.Windows.Forms.Padding(6, 7, 6, 7);
            this.contextTypeDropDown.Name = "contextTypeDropDown";
            this.contextTypeDropDown.Size = new System.Drawing.Size(256, 38);
            this.contextTypeDropDown.TabIndex = 6;
            this.contextTypeDropDown.SelectedIndexChanged += new System.EventHandler(this.contextTypeDropDown_SelectedIndexChanged);
            // 
            // ContextInputLabel
            // 
            this.ContextInputLabel.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left)));
            this.ContextInputLabel.AutoSize = true;
            this.ContextInputLabel.Font = new System.Drawing.Font("Segoe UI", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.ContextInputLabel.ForeColor = System.Drawing.Color.White;
            this.ContextInputLabel.Location = new System.Drawing.Point(20, 134);
            this.ContextInputLabel.Margin = new System.Windows.Forms.Padding(0, 6, 6, 6);
            this.ContextInputLabel.Name = "ContextInputLabel";
            this.ContextInputLabel.Size = new System.Drawing.Size(122, 30);
            this.ContextInputLabel.TabIndex = 7;
            this.ContextInputLabel.Text = "Instrument";
            this.ContextInputLabel.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // ContextItemComboBox
            // 
            this.ContextItemComboBox.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.ContextItemComboBox.FormattingEnabled = true;
            this.ContextItemComboBox.Items.AddRange(new object[] {
            "AAPL",
            "CSCO",
            "IBM",
            "MSFT",
            "TSLA"});
            this.ContextItemComboBox.Location = new System.Drawing.Point(26, 177);
            this.ContextItemComboBox.Margin = new System.Windows.Forms.Padding(6, 7, 6, 7);
            this.ContextItemComboBox.Name = "ContextItemComboBox";
            this.ContextItemComboBox.Size = new System.Drawing.Size(256, 38);
            this.ContextItemComboBox.TabIndex = 8;
            // 
            // label2
            // 
            this.label2.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left)));
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Segoe UI", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.label2.ForeColor = System.Drawing.Color.White;
            this.label2.Location = new System.Drawing.Point(320, 34);
            this.label2.Margin = new System.Windows.Forms.Padding(0, 6, 6, 6);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(159, 30);
            this.label2.TabIndex = 9;
            this.label2.Text = "Context Group";
            // 
            // contextGroupComboBox
            // 
            this.contextGroupComboBox.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.contextGroupComboBox.Enabled = false;
            this.contextGroupComboBox.FormattingEnabled = true;
            this.contextGroupComboBox.Items.AddRange(new object[] {
            "N/A"});
            this.contextGroupComboBox.Location = new System.Drawing.Point(326, 77);
            this.contextGroupComboBox.Margin = new System.Windows.Forms.Padding(6, 7, 6, 7);
            this.contextGroupComboBox.Name = "contextGroupComboBox";
            this.contextGroupComboBox.Size = new System.Drawing.Size(256, 38);
            this.contextGroupComboBox.TabIndex = 10;
            this.contextGroupComboBox.SelectedIndexChanged += new System.EventHandler(this.contextGroupComboBox_SelectedIndexChanged);
            // 
            // label3
            // 
            this.label3.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left)));
            this.label3.AutoSize = true;
            this.label3.Font = new System.Drawing.Font("Segoe UI", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.label3.ForeColor = System.Drawing.Color.White;
            this.label3.Location = new System.Drawing.Point(320, 134);
            this.label3.Margin = new System.Windows.Forms.Padding(0, 6, 6, 6);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(157, 30);
            this.label3.TabIndex = 11;
            this.label3.Text = "Interop Broker";
            // 
            // interopBrokerInput
            // 
            this.interopBrokerInput.Location = new System.Drawing.Point(326, 177);
            this.interopBrokerInput.Margin = new System.Windows.Forms.Padding(6, 7, 6, 7);
            this.interopBrokerInput.MinimumSize = new System.Drawing.Size(4, 38);
            this.interopBrokerInput.Name = "interopBrokerInput";
            this.interopBrokerInput.PlaceholderText = "openfin-browser";
            this.interopBrokerInput.Size = new System.Drawing.Size(258, 35);
            this.interopBrokerInput.TabIndex = 12;
            this.interopBrokerInput.TextChanged += new System.EventHandler(this.interopBrokerInput_TextChanged);
            this.interopBrokerInput.Leave += new System.EventHandler(this.interopBrokerInput_Leave);
            // 
            // receivedInstrument
            // 
            this.receivedInstrument.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left)));
            this.receivedInstrument.AutoSize = true;
            this.receivedInstrument.Font = new System.Drawing.Font("Segoe UI", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.receivedInstrument.ForeColor = System.Drawing.Color.White;
            this.receivedInstrument.Location = new System.Drawing.Point(620, 34);
            this.receivedInstrument.Margin = new System.Windows.Forms.Padding(0, 6, 6, 6);
            this.receivedInstrument.Name = "receivedInstrument";
            this.receivedInstrument.Size = new System.Drawing.Size(99, 30);
            this.receivedInstrument.TabIndex = 13;
            this.receivedInstrument.Text = "Received";
            // 
            // receivedContext
            // 
            this.receivedContext.AutoSize = true;
            this.receivedContext.ForeColor = System.Drawing.Color.White;
            this.receivedContext.Location = new System.Drawing.Point(626, 70);
            this.receivedContext.Margin = new System.Windows.Forms.Padding(6, 0, 6, 0);
            this.receivedContext.Name = "receivedContext";
            this.receivedContext.Size = new System.Drawing.Size(83, 30);
            this.receivedContext.TabIndex = 14;
            this.receivedContext.Text = "Not Set";
            // 
            // embeddedViewPanel
            // 
            this.embeddedViewPanel.Controls.Add(this.embeddedView);
            this.embeddedViewPanel.Dock = System.Windows.Forms.DockStyle.Fill;
            this.embeddedViewPanel.Location = new System.Drawing.Point(0, 424);
            this.embeddedViewPanel.Margin = new System.Windows.Forms.Padding(2);
            this.embeddedViewPanel.Name = "embeddedViewPanel";
            this.embeddedViewPanel.Padding = new System.Windows.Forms.Padding(20);
            this.embeddedViewPanel.Size = new System.Drawing.Size(1206, 712);
            this.embeddedViewPanel.TabIndex = 5;
            // 
            // embeddedView
            // 
            this.embeddedView.AutoScale = true;
            this.embeddedView.Dock = System.Windows.Forms.DockStyle.Fill;
            this.embeddedView.Location = new System.Drawing.Point(20, 20);
            this.embeddedView.Margin = new System.Windows.Forms.Padding(2);
            this.embeddedView.Name = "embeddedView";
            this.embeddedView.OnForcedClosed = null;
            this.embeddedView.OnNavigationRejected = null;
            this.embeddedView.OnReady = null;
            this.embeddedView.OpenfinWindow = null;
            this.embeddedView.Size = new System.Drawing.Size(1166, 672);
            this.embeddedView.TabIndex = 0;
            this.embeddedView.TabStop = false;
            this.embeddedView.Text = "embeddedView3";
            // 
            // separator
            // 
            this.separator.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            this.separator.Dock = System.Windows.Forms.DockStyle.Top;
            this.separator.Location = new System.Drawing.Point(0, 102);
            this.separator.Margin = new System.Windows.Forms.Padding(0);
            this.separator.Name = "separator";
            this.separator.Size = new System.Drawing.Size(1206, 2);
            this.separator.TabIndex = 3;
            this.separator.Text = "label5";
            // 
            // label1
            // 
            this.label1.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left)));
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Segoe UI", 14F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.label1.ForeColor = System.Drawing.Color.White;
            this.label1.Location = new System.Drawing.Point(3, 16);
            this.label1.Margin = new System.Windows.Forms.Padding(0);
            this.label1.Name = "label1";
            this.label1.Padding = new System.Windows.Forms.Padding(20, 0, 20, 0);
            this.label1.Size = new System.Drawing.Size(465, 45);
            this.label1.TabIndex = 2;
            this.label1.Text = "WinForm Interop Example";
            // 
            // pictureBox1
            // 
            this.pictureBox1.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.pictureBox1.Image = global::OpenFin.Interop.Win.Sample.Properties.Resources.icon_blue;
            this.pictureBox1.Location = new System.Drawing.Point(1116, 22);
            this.pictureBox1.Name = "pictureBox1";
            this.pictureBox1.Size = new System.Drawing.Size(64, 64);
            this.pictureBox1.TabIndex = 9;
            this.pictureBox1.TabStop = false;
            // 
            // panelUnderline
            // 
            this.panelUnderline.Controls.Add(this.label5);
            this.panelUnderline.Controls.Add(this.pictureBox1);
            this.panelUnderline.Controls.Add(this.label1);
            this.panelUnderline.Dock = System.Windows.Forms.DockStyle.Top;
            this.panelUnderline.Location = new System.Drawing.Point(0, 0);
            this.panelUnderline.Name = "panelUnderline";
            this.panelUnderline.Size = new System.Drawing.Size(1206, 102);
            this.panelUnderline.TabIndex = 1;
            // 
            // label5
            // 
            this.label5.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left)));
            this.label5.AutoSize = true;
            this.label5.Font = new System.Drawing.Font("Segoe UI", 8F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.label5.ForeColor = System.Drawing.Color.White;
            this.label5.Location = new System.Drawing.Point(5, 63);
            this.label5.Margin = new System.Windows.Forms.Padding(0);
            this.label5.Name = "label5";
            this.label5.Padding = new System.Windows.Forms.Padding(20, 0, 20, 0);
            this.label5.Size = new System.Drawing.Size(534, 25);
            this.label5.TabIndex = 10;
            this.label5.Text = "Demonstrate interop with OpenFin in a native application";
            // 
            // submitContextButton
            // 
            this.submitContextButton.Anchor = System.Windows.Forms.AnchorStyles.Left;
            this.submitContextButton.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(79)))), ((int)(((byte)(77)))), ((int)(((byte)(255)))));
            this.submitContextButton.Enabled = false;
            this.submitContextButton.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.submitContextButton.ForeColor = System.Drawing.Color.White;
            this.submitContextButton.Location = new System.Drawing.Point(441, 11);
            this.submitContextButton.Margin = new System.Windows.Forms.Padding(6, 7, 6, 7);
            this.submitContextButton.Name = "submitContextButton";
            this.submitContextButton.Size = new System.Drawing.Size(190, 50);
            this.submitContextButton.TabIndex = 18;
            this.submitContextButton.Text = "Submit Context";
            this.submitContextButton.UseVisualStyleBackColor = false;
            this.submitContextButton.Click += new System.EventHandler(this.submitContextButton_Click);
            // 
            // connectToBrokerButton
            // 
            this.connectToBrokerButton.Anchor = System.Windows.Forms.AnchorStyles.Left;
            this.connectToBrokerButton.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(79)))), ((int)(((byte)(77)))), ((int)(((byte)(255)))));
            this.connectToBrokerButton.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.connectToBrokerButton.ForeColor = System.Drawing.Color.White;
            this.connectToBrokerButton.Location = new System.Drawing.Point(26, 11);
            this.connectToBrokerButton.Margin = new System.Windows.Forms.Padding(6, 7, 6, 7);
            this.connectToBrokerButton.Name = "connectToBrokerButton";
            this.connectToBrokerButton.Size = new System.Drawing.Size(197, 50);
            this.connectToBrokerButton.TabIndex = 16;
            this.connectToBrokerButton.Text = "Connect To Broker";
            this.connectToBrokerButton.UseVisualStyleBackColor = false;
            this.connectToBrokerButton.Click += new System.EventHandler(this.connectToBrokerButton_Click);
            // 
            // createBrokerButton
            // 
            this.createBrokerButton.Anchor = System.Windows.Forms.AnchorStyles.Left;
            this.createBrokerButton.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(79)))), ((int)(((byte)(77)))), ((int)(((byte)(255)))));
            this.createBrokerButton.Enabled = false;
            this.createBrokerButton.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.createBrokerButton.ForeColor = System.Drawing.Color.White;
            this.createBrokerButton.Location = new System.Drawing.Point(248, 11);
            this.createBrokerButton.Margin = new System.Windows.Forms.Padding(4);
            this.createBrokerButton.Name = "createBrokerButton";
            this.createBrokerButton.Size = new System.Drawing.Size(166, 50);
            this.createBrokerButton.TabIndex = 17;
            this.createBrokerButton.Text = "Create Broker";
            this.createBrokerButton.UseVisualStyleBackColor = false;
            this.createBrokerButton.Click += new System.EventHandler(this.createBrokerButton_Click);
            // 
            // panelButtons
            // 
            this.panelButtons.Controls.Add(this.createBrokerButton);
            this.panelButtons.Controls.Add(this.connectToBrokerButton);
            this.panelButtons.Controls.Add(this.submitContextButton);
            this.panelButtons.Dock = System.Windows.Forms.DockStyle.Top;
            this.panelButtons.Location = new System.Drawing.Point(0, 344);
            this.panelButtons.Name = "panelButtons";
            this.panelButtons.Padding = new System.Windows.Forms.Padding(20);
            this.panelButtons.Size = new System.Drawing.Size(1206, 80);
            this.panelButtons.TabIndex = 15;
            // 
            // MainWindow
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(12F, 30F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(30)))), ((int)(((byte)(31)))), ((int)(((byte)(35)))));
            this.ClientSize = new System.Drawing.Size(1206, 1136);
            this.Controls.Add(this.statusStrip);
            this.Controls.Add(this.embeddedViewPanel);
            this.Controls.Add(this.panelButtons);
            this.Controls.Add(this.tableLayoutPanel1);
            this.Controls.Add(this.separator);
            this.Controls.Add(this.panelUnderline);
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.Margin = new System.Windows.Forms.Padding(6, 7, 6, 7);
            this.Name = "MainWindow";
            this.Text = "Interop Example Tool";
            this.statusStrip.ResumeLayout(false);
            this.statusStrip.PerformLayout();
            this.tableLayoutPanel1.ResumeLayout(false);
            this.tableLayoutPanel1.PerformLayout();
            this.embeddedViewPanel.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            this.panelUnderline.ResumeLayout(false);
            this.panelUnderline.PerformLayout();
            this.panelButtons.ResumeLayout(false);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.StatusStrip statusStrip;
        private System.Windows.Forms.ToolStripStatusLabel openFinStatusLabel;
        private System.Windows.Forms.ToolStripStatusLabel orderStatusLabel;
        private System.Windows.Forms.TableLayoutPanel tableLayoutPanel1;
        private System.Windows.Forms.Label ContextInputLabel;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label receivedInstrument;
        private System.Windows.Forms.Label receivedContext;
        private System.Windows.Forms.ComboBox contextGroupComboBox;
        private System.Windows.Forms.ComboBox ContextItemComboBox;
        private System.Windows.Forms.TextBox interopBrokerInput;
        private System.Windows.Forms.Panel embeddedViewPanel;
        private Openfin.WinForm.EmbeddedView embeddedView;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.ComboBox contextTypeDropDown;
        private System.Windows.Forms.Label separator;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.PictureBox pictureBox1;
        private System.Windows.Forms.Panel panelUnderline;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.Button submitContextButton;
        private System.Windows.Forms.Button connectToBrokerButton;
        private System.Windows.Forms.Button createBrokerButton;
        private System.Windows.Forms.Panel panelButtons;
    }
}

